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
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime);
  }
  constructor(service: TipoTurnoBtnService) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    this.turnos = service.getTipoTurno(); 
   }

  ngOnInit() {
  }

}
