import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { GeneracionTurnoModule } from './generacion-turno/generacion-turno.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    GeneracionTurnoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
