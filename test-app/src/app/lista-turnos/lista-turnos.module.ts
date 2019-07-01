import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnosTxtComponent } from './turnos-txt/turnos-txt.component';
import { MatListModule } from '@angular/material/';
import { Turno } from '../models/Turno';

@NgModule({
  declarations: [TurnosComponent, TurnosTxtComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    TurnosComponent,
    TurnosTxtComponent
  ]
})
export class ListaTurnosModule { }
