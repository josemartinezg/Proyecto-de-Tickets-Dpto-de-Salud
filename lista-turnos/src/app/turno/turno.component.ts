import { Component, OnInit, Input} from '@angular/core';
import { Turno } from '../models/Turno';
import { TurnoService } from  '../services/turno.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit {
  //@Input() turno: Turno;
  turnos: Turno[];
  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    this.turnoService.getTurnos().subscribe(turnos => {
      this.turnos = turnos; 
    });
  }

}
