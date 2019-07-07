import { Component, OnInit, Input } from '@angular/core';
import { Turno } from '../../models/Turno';
import { TurnosComponent } from '../turnos/turnos.component';

@Component({
  selector: 'turnos-txt',
  templateUrl: './turnos-txt.component.html',
  styleUrls: ['./turnos-txt.component.css']
})
export class TurnosTxtComponent implements OnInit {
  @Input() turno: Turno;
  constructor() { }

  ngOnInit() {
  }

}
