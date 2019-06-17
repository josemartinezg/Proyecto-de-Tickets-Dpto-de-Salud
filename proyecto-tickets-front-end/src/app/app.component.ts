import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTurnoBtnService } from './generacion-turno/tipo-turno-btn/tipo-turno-btn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'proyecto-tickets-front-end';
  turnos;
  response: any;
  url = 'http://localhost:3000/api/turnos';
  constructor(service: TipoTurnoBtnService, private http: HttpClient) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    this.turnos = service.getTipoTurno(); 
   }
  generarTurno(){
    let post = {
      tipo_turno: "estudiante",
      tipo_consulta: "estudiante",
      id_paciente: "20150379",
      id_empleado_salud: "corodriguez",
      codigo_turno: "string",
      fecha_hora_emision: "2019-06-12T06:03:28.779Z",
      fecha_hora_inicio: "2019-06-12T06:03:28.780Z",
      fecha_hora_fin: "2019-06-12T06:03:28.780Z"
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

}
