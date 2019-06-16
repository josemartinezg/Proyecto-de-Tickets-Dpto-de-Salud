import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoTurnoBtnComponent } from './tipo-turno-btn/tipo-turno-btn.component';

@NgModule({
  declarations: [TipoTurnoBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TipoTurnoBtnComponent
  ]
})
export class GeneracionTurnoModule { }
