import { Component, OnInit, Input} from '@angular/core';
import { TurnosHoy } from '../../components/tipo-turno-btn/TurnosHoy';
import { HttpClient } from '@angular/common/http';

var count = 0;

@Component({
  selector: 'btn-llamar',
  templateUrl: './btn-llamar.component.html',
  styleUrls: ['./btn-llamar.component.css']
})


export class BtnLlamarComponent implements OnInit {
  turnos;
  @Input() disabled: boolean;
  @Input() idTurno: string;
  isEnabled: boolean = false;
  response: any;
  misTurnos:TurnosHoy[];
  url = 'http://localhost:3000/api/turnos';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  
  onCkick(){
    count++;
    console.log(count);
    this.isEnabled = !this.isEnabled;
    var route: string = "/" + this.idTurno;
      this.http.patch(this.url + route, {estado_id: 2})
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
