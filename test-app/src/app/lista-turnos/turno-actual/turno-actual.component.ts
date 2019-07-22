import { Component, OnInit, Input } from '@angular/core';
import { Turno } from '../../models/Turno';
import { TurnosHoy } from '../../components/tipo-turno-btn/TurnosHoy';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/globals';

@Component({
  selector: 'turno-actual',
  templateUrl: './turno-actual.component.html',
  styleUrls: ['./turno-actual.component.css']
})
export class TurnoActualComponent implements OnInit {
  @Input() idTurno: String;
  @Input() turno: Turno;
  @Input() disabled: boolean;
  isEnabled: boolean = false;
  response: any;
  misTurnos:TurnosHoy[];
  url: string;
  relation: string = 'turnos';

  constructor(private http: HttpClient, private glob: Globals) {
    this.url = this.glob.SERVER_URL + this.relation; 
   }

  ngOnInit() {
  }
  onClick(){
    this.isEnabled = !this.isEnabled;
    var route: string = "/" + this.turno.id;
    var turnoHoy = new TurnosHoy();
    var dateTime = turnoHoy.getDate();
    //fecha_hora_inicio: dateTime
    console.log(dateTime);
      this.http.patch(this.url + route, {fecha_hora_fin: dateTime, estado_id: 5})
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
