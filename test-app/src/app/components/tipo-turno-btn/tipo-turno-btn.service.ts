import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../../models/Consulta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoTurnoBtnService {
  url:string = 'http://localhost:3000/api/consultas';

  constructor(private http:HttpClient){

  }
  getTipoTurno(){
    return ['Estudiante', 'Empleado', 'Contratista','Piscina','Certificación Médica','Emergencia'];
  }

  getTipoTurnoAlt(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.url);
  }

}
