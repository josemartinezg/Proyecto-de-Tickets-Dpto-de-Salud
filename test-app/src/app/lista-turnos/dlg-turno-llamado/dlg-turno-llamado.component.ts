import { Component, OnInit, Input } from '@angular/core';
import { Turno } from '../../models/Turno';
@Component({
  selector: 'dlg-turno-llamado',
  templateUrl: './dlg-turno-llamado.component.html',
  styleUrls: ['./dlg-turno-llamado.component.css']
})
export class DlgTurnoLlamadoComponent implements OnInit {
  @Input() turno: Turno;
  constructor() { }

  ngOnInit() {
  }

}
