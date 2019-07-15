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
import { TurnoActualComponent } from './turno-actual/turno-actual.component';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { OpcionUsuarioComponent } from '../components/opcion-usuario/opcion-usuario.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BtnAceptarComponent } from './btn-aceptar/btn-aceptar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BtnLlamarComponent } from './btn-llamar/btn-llamar.component';
import { DlgTurnoLlamadoComponent } from './dlg-turno-llamado/dlg-turno-llamado.component';



@NgModule({
  declarations: [TurnosComponent, TurnosTxtComponent, TurnosUsuarioAtencionComponent, TurnoActualComponent,  OpcionUsuarioComponent, NavbarComponent, BtnAceptarComponent, BtnLlamarComponent, DlgTurnoLlamadoComponent],
  imports: [
    CommonModule,
    MatListModule, 
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule

  
    
   
  ],
  exports: [
    TurnosComponent,
    TurnosTxtComponent,
    TurnosUsuarioAtencionComponent,
    TurnoActualComponent,
    NavbarComponent,
    TurnoActualComponent,
    BtnAceptarComponent,
    BtnLlamarComponent
    
  ]
})
export class ListaTurnosModule { }
