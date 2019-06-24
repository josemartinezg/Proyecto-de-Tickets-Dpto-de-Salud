import { Component, Input } from '@angular/core';
import { ITurno } from './turnos.model';

@Component({
    selector : 'turno-detail',
    template : `<div *ngIf="turno">
    <h2>{{turno.name}}</h2>
    <div><label>id: </label>{{turno.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="turno.name" placeholder="name"/>
    </div>
    </div>`
})

export class TurnoDetailComponent{
    @Input() turno:ITurno;
}