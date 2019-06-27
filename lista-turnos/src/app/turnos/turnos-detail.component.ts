import { Component, Input, OnInit } from '@angular/core';
import { ITurno } from './turnos.model';
import { Turno } from '../models/Turno'
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

export class TurnoDetailComponent implements OnInit{
    misTurnos:Turno[];
    @Input() turno:ITurno;
    
    ngOnInit(){
        this.misTurnos = [
            {
                id: 1,
                id_turno: "AA004",
                tipo_consulta: "Estudiante",
                activo: true,
                id_usuario_atencion: "sorodriguez",
                fecha_hora_emision: new Date(),
                consulta_id: 1,
                usuarios_id: 2,
                estado_id: 1
                }
        ]
    }
}