import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turno } from '../models/Turno';
import { Observable } from 'rxjs';
import { TurnosHoy } from '../components/tipo-turno-btn/TurnosHoy';

var count = 0;
@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  url:string = 'http://localhost:3000/api/turnos';
  limitUsuario = '?filter[where][estado_id]=1';
  limitActual = '?filter[where][estado_id]=3';
  
  constructor(private http:HttpClient) { }

  getTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url + this.limitUsuario);
  }
  getTurnosActual():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url + this.limitActual);
  }
  
  
  generarTurno(turno, puesto){

    count++;
    var turnoHoy = new TurnosHoy();
    turnoHoy.getTurno(turno, count);
    console.log(turnoHoy.codigo);
    var dateTime = turnoHoy.getDate();
    let post = {
      id_turno: turnoHoy.codigo,
      tipo_consulta: turno, 
      id_usuario_atencion: "sorodriguez",
      fecha_hora_emision: dateTime,
      consulta_id: 1,
      usuarios_id: 2,
      estado_id: 1,
      no_puesto: puesto

    }
    this.http.post(this.url, post)
    .subscribe(response =>{
    console.log(response);
    })
    console.log("Generar turno.");
  }
  asignarPuesto(){
    
  }

}