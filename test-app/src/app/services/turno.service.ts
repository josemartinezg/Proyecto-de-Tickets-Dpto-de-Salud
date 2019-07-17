import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turno } from '../models/Turno';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TurnosHoy } from '../components/tipo-turno-btn/TurnosHoy';
import { WebsocketService } from './websocket.service';
import {tap} from 'rxjs/operators';

var count = 0;
@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  
  url:string = 'http://localhost:3000/api/turnos';
  limitUsuario = '?filter[where][or][0][estado_id]=1&filter[where][or][1][estado_id]=2';
  limitActual = '?filter[where][estado_id]=3&filter[limit]=1';
  limitLlamada = '?filter[where][estado_id]=2&filter[limit]=1';
  private _refreshNeeded$ = new Subject<void>();
  // private turnoActualTest = new BehaviorSubject<string>('john');
  // cast = this.turnoActualTest.asObservable();
  
  constructor(private http:HttpClient, public wsService: WebsocketService) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  getTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url + this.limitUsuario);
  }

  getTurnosActual():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url + this.limitActual);
  }
  
  getTurnosLlamada():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url + this.limitLlamada);
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
    // this.sendLiveTicket(post);
    // console.log("Generar turno.");
  }

  createTurno(turno, puesto): Observable<Turno>{
    count++;
    var turnoHoy = new TurnosHoy();
    turnoHoy.getTurno(turno.tipo_consulta, count);
    console.log(turnoHoy.codigo);
    var dateTime = turnoHoy.getDate();
    let post = {
      id_turno: turnoHoy.codigo,
      tipo_consulta: turno.tipo_consulta, 
      id_usuario_atencion: "sorodriguez",
      fecha_hora_emision: dateTime,
      consulta_id: turno.id,
      usuarios_id: 2,
      estado_id: 1,
      no_puesto: puesto

    }
    return this.http
      .post<Turno>(this.url, post)
      .pipe(
        tap(() =>  {
          this._refreshNeeded$.next();
        })
      );

  }

  // sendLiveTicket(post){
  //   this.wsService.emit('turno', post);
  // }
  asignarPuesto(){
    
  }
  
}