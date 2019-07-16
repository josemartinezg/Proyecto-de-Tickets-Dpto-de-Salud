import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes, Router } from '@angular/router';
import { TurnosAdminComponent } from './turnos-admin/turnos-admin.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { PuestoAdminComponent } from './puesto-admin/puesto-admin.component';
import { EstadosAdminComponent } from './estados-admin/estados-admin.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent,TurnosAdminComponent, UsuariosAdminComponent, PuestoAdminComponent, EstadosAdminComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
    
  ]

  
})

export class AdminModule { }
