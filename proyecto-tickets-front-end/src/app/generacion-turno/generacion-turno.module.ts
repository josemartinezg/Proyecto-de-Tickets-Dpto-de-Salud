import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoTurnoBtnComponent } from './tipo-turno-btn/tipo-turno-btn.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TipoTurnoBtnComponent],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  exports: [
    TipoTurnoBtnComponent
  ]
})
export class GeneracionTurnoModule { }
