import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnosTxtComponent } from './turnos-txt/turnos-txt.component';
import { MatListModule } from '@angular/material/';
import { Turno } from '../models/Turno';
import { TurnosUsuarioAtencionComponent } from './turnos-usuario-atencion/turnos-usuario-atencion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule }from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TurnosComponent, TurnosTxtComponent, TurnosUsuarioAtencionComponent],
  imports: [
    CommonModule,
    MatListModule, 
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  exports: [
    TurnosComponent,
    TurnosTxtComponent,
    TurnosUsuarioAtencionComponent
  ]
})
export class ListaTurnosModule { }
