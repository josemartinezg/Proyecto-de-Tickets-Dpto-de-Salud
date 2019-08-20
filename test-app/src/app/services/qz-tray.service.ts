import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import * as shajs from 'sha.js';
import { sha256 } from 'js-sha256';
import * as qz from 'qz-tray';

// declare var qz: any;

@Injectable({
  providedIn: 'root'
})
export class QzTrayService {

  constructor() { }
  errorHandler(error: any): Observable<any> {
    return Observable.throw(error);
    qz.api.setSha256Type(data => sha256(data));
    qz.api.setPromiseType(resolver => new Promise(resolver));
  }

  // Get the list of printers connected
  getPrinters(): Observable<string[]> {
    return Observable
      .fromPromise(
        qz.websocket.connect().then(() => qz.printers.find()))
      .map((printers: string[]) => printers)
      .catch(this.errorHandler);
  }
  // Get the SPECIFIC connected printer
  getPrinter(printerName: string): Observable<string> {
    return Observable
      .fromPromise(
        qz.websocket.connect()
          .then(() => qz.printers.find(printerName))
      )
      .map((printer: string) => printer)
      .catch(this.errorHandler);
  }
  // Print data to chosen printer
  printData(printer: string, data: any): Observable<any> {
    // Create a default config for the found printer
    const config = qz.configs.create(printer);
    return Observable.fromPromise(qz.print(config, data))
      .map((anything: any) => anything)
      .catch(this.errorHandler);
  }

  // Disconnect QZ Tray from the browser
  removePrinter(): void {
    qz.websocket.disconnect();
  }
}
