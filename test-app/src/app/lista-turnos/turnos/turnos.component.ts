import { Component, OnInit } from '@angular/core';
import { Turno } from '../../models/Turno';
import { TurnoService } from '../../services/turno.service';
import { TurnoDataSource } from '../../models/TurnoDataSource';
import { BehaviorSubject, interval, Subscription } from 'rxjs'
import { MatDialog } from '@angular/material/dialog';
import { DlgTurnoLlamadoComponent } from '../dlg-turno-llamado/dlg-turno-llamado.component';

@Component({
  selector: 'turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  turnos: Turno[];
  turnoActual: Turno[];
  turnoLlamado: Turno[];
  private updateSubscription: Subscription;
  dataSource: TurnoDataSource;
  misTurnos: Turno[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_turno', 'id_usuario_atencion'];
  constructor(private turnoService: TurnoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.turnoService.getTurnos().subscribe(
        turnos => {
          this.misTurnos = turnos;
        }
      )
      });
    this.turnoService.getTurnosActual().subscribe(turnoActual => {
      this.turnoActual = turnoActual; 
    });

    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.turnoService.getTurnosLlamada().subscribe(
        turnoLlamado => {
          this.turnoLlamado = turnoLlamado;
        }
      )
      });
     this.dataSource = new TurnoDataSource(this.turnoService);
    // 
  }

  openDialog(): void {
    this.dialog.open(DlgTurnoLlamadoComponent);
  }

  isSelected(turno){
    if (turno.estado_id == 2){
      return 'turnoActivo';
    }else{
      return 'turno';
    }
  }
}
