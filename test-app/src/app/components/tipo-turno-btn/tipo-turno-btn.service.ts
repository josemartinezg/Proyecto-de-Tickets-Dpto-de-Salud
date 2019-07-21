import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../../models/Consulta';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/globals';

@Injectable({
  providedIn: 'root'
})
export class TipoTurnoBtnService {
  url:string;
  relation: string = 'consultas';
  

  constructor(private http:HttpClient, private glob: Globals) { 
    this.url = this.glob.SERVER_URL + this.relation; 
  }
  getTipoTurno(){
    return ['Estudiante', 'Empleado', 'Contratista','Piscina','Certificación Médica','Emergencia'];
  }

  getTipoTurnoAlt(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.url);
  }

}
