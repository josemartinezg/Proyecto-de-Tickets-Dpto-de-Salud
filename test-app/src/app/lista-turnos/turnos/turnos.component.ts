import { Component, OnInit } from '@angular/core';
import { Turno } from '../../models/Turno';
import { TurnoService } from '../../services/turno.service';
import { TurnoDataSource } from '../../models/TurnoDataSource';
@Component({
  selector: 'turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  turnos: Turno[];
  turnoActual: Turno[];
  
  dataSource: TurnoDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_turno', 'id_usuario_atencion'];
  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    this.turnoService.getTurnosActual().subscribe(turnoActual => {
      this.turnoActual = turnoActual; 
    });
     this.dataSource = new TurnoDataSource(this.turnoService);
    // 
  }
}
