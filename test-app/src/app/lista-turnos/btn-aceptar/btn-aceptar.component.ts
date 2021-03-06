import { Component, OnInit, Input} from '@angular/core';
import { TurnosHoy } from '../../components/tipo-turno-btn/TurnosHoy';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/globals';
@Component({
  selector: 'btn-aceptar',
  templateUrl: './btn-aceptar.component.html',
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent implements OnInit {
  turnos;
  @Input() disabled: boolean;
  @Input() idTurno: string;
  isEnabled: boolean = false;
  response: any;
  misTurnos:TurnosHoy[];
  url:string;
  relation: string = 'turnos';
  constructor(private http: HttpClient,  private glob: Globals) { 
    this.url = this.glob.SERVER_URL + this.relation;
  }

  ngOnInit() {
  }

  
  onCkick(){
    this.isEnabled = !this.isEnabled;
    var route: string = "/" + this.idTurno;
    var turnoHoy = new TurnosHoy();
    var dateTime = turnoHoy.getDate();
    //fecha_hora_inicio: dateTime
    console.log(dateTime);
      this.http.patch(this.url + route, {fecha_hora_inicio: dateTime, estado_id: 3})
    .subscribe((response) => {
        this.response = response;
        console.log(response);
      })
    this.http.get(this.url)
    .subscribe((response) => {
        this.response = response;
        console.log(response);
      })
    
  }
}
