import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import * as KJUR from 'jsrsasign';
//import * as qz from 'qz-tray';

declare var qz: any;

@Injectable({
  providedIn: 'root'
})
export class QzTrayService {
  private config;

  constructor(private http: HttpClient) { }

  /*  */
  async getPrivateKey(){
    return this.http.get("assets/certificates/cert.txt", { responseType: 'text' }).toPromise();
  }

  async getPrivatePem() {
		return this.http.get("assets/certificates/key.txt", { responseType: 'text' }).toPromise();
	}

  initQZ(){
    let privateKey = '';
	let privatePem = '';

	this.getPrivateKey().then((data) => privateKey = data);
    this.getPrivatePem().then((data) => privatePem = data);
    
    qz.security.setCertificatePromise(function(resolve, reject) {
			console.log('Set Certificate');
			resolve(privateKey);
    });
    
    qz.security.setSignaturePromise(function(toSign) {
			return function(resolve, reject) {
				try {
					var pk = KJUR.KEYUTIL.getKey(privatePem);
					var sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});  
					sig.init(pk); 
					sig.updateString(toSign);
					var hex = sig.sign();
					resolve(KJUR.stob64(KJUR.hextorstr(hex)));
				} catch (err) {
					console.error(err);
					reject(err);
				}
			};
		});
		qz.websocket.connect();
  }

  errorHandler(error: any): Observable<any> {
    return Observable
		.fromPromise(qz.websocket.connect().then(() => qz.printers.find()))
		.map((printers: string[]) => printers);
  }
  // Get the list of printers connected
  getPrinters(): Observable<string[]> {
		return Observable
		.fromPromise(qz.websocket.connect().then(() => qz.printers.find()))
		.map((printers: string[]) => printers);
	}
  // Get the SPECIFIC connected printer
  getPrinter(printerName: string): Observable<string> {
		return Observable
		.fromPromise(qz.websocket.connect().then(() => qz.printers.find(printerName)))
		.map((printer: string) => printer);
	}
  // Print data to chosen printer
	printData(printer: string, data: any): Observable<any> {
		qz.printers.find("Generic / Text Only").then(function(found) {
			console.log("Printer: " + found);
			
			var config = qz.configs.create("Generic / Text Only");               // Exact printer name from OS
			var data = ['^XA^FO50,50^ADN,36,20^FDRAW ZPL EXAMPLE^FS^XZ'];   // Raw commands (ZPL provided)
			
			qz.print(config, data).then(function() {
				console.log("Sent data to printer");
			});
		}).catch((err) => {console.log(err) });
		
		const config = qz.configs.create(printer);
		
		return Observable.fromPromise(qz.print(config, data))
		.map((anything: any) => anything);
  }
  
  printHTML(printerName, htmlData) {
		qz.printers.find(printerName).then(function(found) {
			console.log("Printer: " + found);
			var config = qz.configs.create(printerName);
			
			qz.print(config, htmlData).then(function() {
				console.log("Sent data to printer");
			}).catch((err) => console.log(err));
		}).catch((err) => {console.log(err) });
	}

  // Disconnect QZ Tray from the browser
  removePrinter(): void {
    qz.websocket.disconnect();
  }
}
