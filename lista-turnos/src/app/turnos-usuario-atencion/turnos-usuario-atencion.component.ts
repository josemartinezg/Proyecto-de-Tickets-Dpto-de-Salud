import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { TurnosUsuarioAtencionDataSource, TurnosUsuarioAtencionItem } from './turnos-usuario-atencion-datasource';
import { TurnoService } from '../services/turno.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Turno } from '../models/Turno';
@Component({
  selector: 'app-turnos-usuario-atencion',
  templateUrl: './turnos-usuario-atencion.component.html',
  styleUrls: ['./turnos-usuario-atencion.component.scss']
})
export class TurnosUsuarioAtencionComponent implements AfterViewInit, OnInit {

  dataSource: TurnoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_turno', 'tipo_consulta', 'id_usuario_atencion', 'fecha_hora_emision', 'estado_id', 'aceptar', 'llamar'];

  
  
  constructor(private turnoServices: TurnoService){

  }

  ngOnInit() {
    this.dataSource = new TurnoDataSource(this.turnoServices);
  }

  ngAfterViewInit() {
   
  }
}
export class TurnoDataSource extends DataSource<any>{
  constructor(private turnoService: TurnoService){
    super();
  }
  connect(): Observable<Turno[]>{
      return this.turnoService.getTurnos();
  }
  disconnect(){}
}
