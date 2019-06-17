import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoTurnoBtnService {

  

  getTipoTurno(){
    return ['Estudiante', 'Empleado', 'Contratista','Piscina','Certificación Médica','Emergencia'];
  }

}
