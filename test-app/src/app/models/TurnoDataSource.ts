import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Turno } from '../models/Turno';
import { TurnoService } from '../services/turno.service';

export class TurnoDataSource extends DataSource<any>{
    constructor(private turnoService: TurnoService){
      super();
    }
    connect(): Observable<Turno[]>{
        return this.turnoService.getTurnos();
    }
    disconnect(){}
  }