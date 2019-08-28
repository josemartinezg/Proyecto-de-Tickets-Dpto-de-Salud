import { Component, OnInit, Input} from '@angular/core';
import { TurnosHoy } from '../../components/tipo-turno-btn/TurnosHoy';
import { HttpClient } from '@angular/common/http';
import { Globals } from 'src/globals';

@Component({
  selector: 'btn-declinar',
  templateUrl: './btn-declinar.component.html',
  styleUrls: ['./btn-declinar.component.css']
})
export class BtnDeclinarComponent implements OnInit {

  turnos;
  @Input() disabled: boolean;
  @Input() idTurno: string;
  isEnabled: boolean = false;
  response: any;
  misTurnos:TurnosHoy[];
  url:string;
  relation: string = 'turnos';
  constructor(private http: HttpClient, private glob: Globals) {
    this.url = this.glob.SERVER_URL + this.relation;
   }

  ngOnInit() {
  }

  
  onCkick(){
    this.isEnabled = !this.isEnabled;
    var route: string = "/" + this.idTurno;
      this.http.patch(this.url + route, {estado_id: 4})
    .subscribe((response) => {
        this.response = response;
        console.log(response);
      })
  }

}
