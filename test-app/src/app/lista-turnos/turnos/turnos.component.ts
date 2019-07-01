import { Component, OnInit } from '@angular/core';
import { Turno } from '../../models/Turno';
import { TurnoService } from '../../services/turno.service';

@Component({
  selector: 'turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  turnos: Turno[];
  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    this.turnoService.getTurnos().subscribe(turnos => {
      this.turnos = turnos; 
    });
  }
}
