import { Injectable } from '@angular/core';
import { ITurno } from './turnos.model';
import { Turnos } from './mock-turns';

@Injectable()
export class TurnoService{
    getTurno() : Promise<ITurno[]>{
        return Promise.resolve(Turnos);
    }
}