import { Component, OnInit, Input, Output } from '@angular/core';
import { TipoTurnoBtnService } from './tipo-turno-btn.service';
import { HttpClient } from '@angular/common/http';
import { createAotUrlResolver } from '@angular/compiler';

@Component({
  selector: 'tipo-turno-btn',
  templateUrl: './tipo-turno-btn.component.html',
  styleUrls: ['./tipo-turno-btn.component.css']
})
export class TipoTurnoBtnComponent implements OnInit {
  turnos;
  @Input('is-active') isActive: boolean;
  response: any;
  url = 'http://localhost:3000/api/turnos';
  constructor(service: TipoTurnoBtnService, private http: HttpClient) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    this.turnos = service.getTipoTurno(); 
   }


  generarTurno(turno){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"."+today.getMilliseconds;
    var dateTime = date+'T'+time+'Z';
    console.log(dateTime + ' ' + turno);

    let post = {
      tipo_turno: turno,
      tipo_consulta: "estudiante",
      id_paciente: "20150379",
      id_empleado_salud: "corodriguez",
      codigo_turno: "string",
      fecha_hora_emision: "2019-06-12T06:03:28.779Z",
      fecha_hora_inicio: "2019-06-12T06:03:28.779Z",
      fecha_hora_fin: "2019-06-12T06:03:28.779Z"
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
