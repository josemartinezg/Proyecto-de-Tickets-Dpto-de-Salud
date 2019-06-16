import { Component, OnInit, Input, Output } from '@angular/core';
import { TipoTurnoBtnService } from './tipo-turno-btn.service';
import { createAotUrlResolver } from '@angular/compiler';

@Component({
  selector: 'tipo-turno-btn',
  templateUrl: './tipo-turno-btn.component.html',
  styleUrls: ['./tipo-turno-btn.component.css']
})
export class TipoTurnoBtnComponent implements OnInit {
  turnos;
  @Input('is-active') isActive: boolean;
  generarTurno(){
    console.log("Generar turno.");
  }
  constructor(service: TipoTurnoBtnService) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    this.turnos = service.getTipoTurno(); 
   }

  ngOnInit() {
  }

}
