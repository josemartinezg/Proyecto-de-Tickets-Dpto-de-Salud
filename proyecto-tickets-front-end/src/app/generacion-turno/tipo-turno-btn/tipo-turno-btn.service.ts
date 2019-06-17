import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoTurnoBtnService {
    
  

  getTipoTurno(){
    return ['Piscina', 'Consulta', 'Emergencia','Nuevo Ingreso','Emergencia','Certificación Médica'];
  }

}