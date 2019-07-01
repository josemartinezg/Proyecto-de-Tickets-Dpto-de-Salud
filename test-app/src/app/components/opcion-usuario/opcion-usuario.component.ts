import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opcion-usuario',
  templateUrl: './opcion-usuario.component.html',
  styleUrls: ['./opcion-usuario.component.css']
})
export class OpcionUsuarioComponent implements OnInit {
  nombreDoctor: string = "Dr. Soldevila";
  constructor() { }

  ngOnInit() {
  }

}
