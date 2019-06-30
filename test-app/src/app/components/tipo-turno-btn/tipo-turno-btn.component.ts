import { Component, OnInit, Input, Output } from '@angular/core';
import { TipoTurnoBtnService } from './tipo-turno-btn.service';
import { HttpClient } from '@angular/common/http';
import { TurnosHoy } from './TurnosHoy';
import { createAotUrlResolver } from '@angular/compiler';

var count = 0;

@Component({
  selector: 'tipo-turno-btn',
  templateUrl: './tipo-turno-btn.component.html',
  styleUrls: ['./tipo-turno-btn.component.css']
})
export class TipoTurnoBtnComponent implements OnInit {
  turnos;
  @Input('is-active') isActive: boolean;
  @Input('tipo_turno') tipo_turno: string;
  response: any;
  buttonName = 'Estudiante';
  misTurnos:TurnosHoy[];
  url = 'http://localhost:3000/api/turnos';
  constructor(service: TipoTurnoBtnService, private http: HttpClient) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    this.turnos = service.getTipoTurno(); 
   }
   


  generarTurno(turno){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"."+today.getUTCMilliseconds();
    var dateTime = date+' '+time;
    console.log("'" + dateTime + ' ' + turno + "'");
    count++;
    var turnoHoy = new TurnosHoy();
    turnoHoy.getTurno(turno, count);
    let post = {
      id_turno: turnoHoy.codigo,
      tipo_consulta: turno,
      id_usuario_atencion: "sorodriguez",
      fecha_hora_emision: dateTime,
      consulta_id: 1,
      usuarios_id: 2,
      estado_id: 1

    }
    this.http.get(this.url)
    .subscribe((response) => {
        this.response = response;
        console.log(response);
      })
    this.http.post(this.url, post)
    .subscribe(response =>{
    console.log(response);
    })
    console.log("Generar turno.");
  }


  ngOnInit() {
  }

}
