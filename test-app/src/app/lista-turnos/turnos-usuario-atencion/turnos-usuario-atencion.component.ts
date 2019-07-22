import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
// import { TurnosUsuarioAtencionDataSource, TurnosUsuarioAtencionItem } from './turnos-usuario-atencion-datasource';
import { TurnoService } from '../../services/turno.service';
import { TurnoDataSource } from '../../models/TurnoDataSource';
import { TurnosHoy } from '../../components/tipo-turno-btn/TurnosHoy';
import { OpcionUsuarioComponent } from '../../components/opcion-usuario/opcion-usuario.component';
// import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
import { Turno } from '../../models/Turno';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-turnos-usuario-atencion',
  templateUrl: './turnos-usuario-atencion.component.html',
  styleUrls: ['./turnos-usuario-atencion.component.css']
})
export class TurnosUsuarioAtencionComponent implements AfterViewInit, OnInit {
  @Input() disabled: boolean;
  private updateSubscription: Subscription;
  isEnabled: boolean = true;
  dataSource: TurnoDataSource;
  turnoActual: Turno[];
  misTurnos: Turno[];

  // turnoActualTest;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_turno', 'tipo_consulta', 'fecha_hora_emision', 'estado_id', 'aceptar', 'llamar'];

  constructor(private turnoServices: TurnoService){

  }


  ngOnInit() {
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.turnoServices.getTurnos().subscribe(
        turnos => {
          this.misTurnos = turnos;
        }
      )
      });

      this.updateSubscription = interval(1000).subscribe(
        (val) => { this.turnoServices.getTurnosActual().subscribe(
          turnos => {
            this.turnoActual = turnos;
          }
        )
        });

    this.turnoServices.getTurnosActual().subscribe(turnoActual => {
      this.turnoActual = turnoActual; 
    });
    this.turnoServices.refreshNeeded$
    .subscribe(() => {
      this.getAllTurnos();
    });

    this.getAllTurnos();

    this.dataSource = new TurnoDataSource(this.turnoServices);
    // this.turnoServices.cast.subscribe(turnoActualTest => this.turnoActualTest = turnoActualTest); 
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
}
private updateStats() {
    console.log('I am doing something every second');
}
  
  private getAllTurnos(){
    this.turnoServices.getTurnos().subscribe(
      (turnos: Turno[]) => this.misTurnos = turnos);
  }
  ngAfterViewInit() {

  }

}

