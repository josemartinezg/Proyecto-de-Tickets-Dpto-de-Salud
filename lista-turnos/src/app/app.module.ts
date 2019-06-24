import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnoDetailComponent} from './turnos/turnos-detail.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    TurnoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule, 
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
