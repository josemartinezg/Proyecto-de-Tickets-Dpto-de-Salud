import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoTurnoBtnService {

  

  getTipoTurno(){
    return ['Piscina', 'Consulta', 'Emergencia'];
  }

}
