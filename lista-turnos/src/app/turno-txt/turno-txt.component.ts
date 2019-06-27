import { Component, OnInit, Input } from '@angular/core';
import { Turno } from '../models/Turno';

@Component({
  selector: 'app-turno-txt',
  templateUrl: './turno-txt.component.html',
  styleUrls: ['./turno-txt.component.scss']
})
export class TurnoTxtComponent implements OnInit {
  @Input() turno: Turno;
  constructor() { }

  ngOnInit() {
  }

}
