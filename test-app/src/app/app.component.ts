import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* El selector es para traer HTML Markup del template relacionado con
  el componente.*/
  templateUrl: './app.component.html',
  /*Esta es la referencia al template. */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "PUCMM Salud",
    isActive: true
  }
}   
