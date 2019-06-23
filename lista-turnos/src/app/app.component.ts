import { OnInit, Component } from '@angular/core';
import { ITurno } from './turnos/turnos.model';
import { TurnoService } from './turnos/turno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[TurnoService]
})
export class AppComponent implements OnInit{
  turnos : ITurno[];
  selectedTurno : ITurno;

  constructor(private turnoService:TurnoService){}

  ngOnInit(): void {
    this.getTurno();
  }

  getTurno():void{
    this.turnoService.getTurno().then(turno => this.turnos = turno);
  }

  onSelect(turno:ITurno):void{
    this.selectedTurno = turno;
  }
}
