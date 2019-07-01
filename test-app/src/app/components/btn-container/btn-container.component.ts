import { Component, OnInit } from '@angular/core';
import { TipoTurnoBtnComponent } from '../tipo-turno-btn/tipo-turno-btn.component';

@Component({
  selector: 'btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.css']
})
export class BtnContainerComponent implements OnInit {
  userName: string = "";
  response: any;
  constructor() { }

  ngOnInit() {
  }

}
