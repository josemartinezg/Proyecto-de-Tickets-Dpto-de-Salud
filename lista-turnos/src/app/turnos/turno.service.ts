import { Injectable } from '@angular/core';
import { ITurno } from './turnos.model';
import { Turnos } from './mock-turns';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TurnoService{
    response: any;
    /*constructor(private http: HttpClient){
    
    }*/
    getTurno() : Promise<ITurno[]>{
        return Promise.resolve(Turnos);
    }
    /*search(){
        this.http.get('http://localhost:3000/api/consultas?filter={"where":{"activo": true}}')
        .subscribe((response) => {
          this.response = response;
          console.log(this.response);
        }) 
      }*/
}