import { PuestoInterface } from './../models/NumeroPuesto-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Globals } from 'src/globals';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  url: string;
  relation: string = 'numeros_puesto';
  constructor(private http: HttpClient, private glob: Globals, private authService : AuthService) { 
    this.url = this.glob.SERVER_URL + this.relation;
  }

  numeroPuesto:Observable<any>;
  public selectedNumPuesto: PuestoInterface ={
    id:null,
    num_puesto:'',
    disponible:true
  }

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json", 
    Authorization : this.authService.getToken()
    
  });

  getAllPuestos(){
    return this.http.get(this.url);
  }


}
