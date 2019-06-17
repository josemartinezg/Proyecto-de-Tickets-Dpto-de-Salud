import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';


import { GeneracionTurnoModule } from './generacion-turno/generacion-turno.module';
import { HttpClient } from 'selenium-webdriver/http';
import { TipoTurnoBtnService } from './generacion-turno/tipo-turno-btn/tipo-turno-btn.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    GeneracionTurnoModule,
    MatToolbarModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    TipoTurnoBtnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
