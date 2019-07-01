import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnoDetailComponent} from './turnos/turnos-detail.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule }from '@angular/material/table';
import { TurnoTxtComponent } from './turno-txt/turno-txt.component';
import { TurnoComponent } from './turno/turno.component'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Turno } from './models/Turno';
import { TurnosUsuarioAtencionComponent } from './turnos-usuario-atencion/turnos-usuario-atencion.component';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    TurnoDetailComponent,
    TurnoTxtComponent,
    TurnoComponent,
    TurnosUsuarioAtencionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule, 
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'usuario-atencion', component: TurnosUsuarioAtencionComponent},
      
    ]),
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
