import { EstadoInterface } from './../../../models/Estado-interface';
import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common'
;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( private estadoService: EstadoService, private location: Location) {

   }

  ngOnInit() {
  }

  onSaveEstado(estadoForm: NgForm): void{
    if(estadoForm.value.id == null){
      this.estadoService.saveEstado(estadoForm.value).subscribe(estado => location.reload());
      console.log(estadoForm);

    }else{
      this.estadoService.updateEstado(estadoForm.value).subscribe(estado => location.reload());

    }

  }

}
