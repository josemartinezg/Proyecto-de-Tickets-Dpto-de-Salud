import { TipoturnoService } from './../../../services/tipoturno.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common'


@Component({
  selector: 'app-modal-tipo-turno',
  templateUrl: './modal-tipo-turno.component.html',
  styleUrls: ['./modal-tipo-turno.component.css']
})
export class ModalTipoTurnoComponent implements OnInit {

  constructor( private tipoturnoService: TipoturnoService, private location: Location) { }

  ngOnInit() {
  }

  onSaveTipoTurno(tipoTurnoForm: NgForm): void{
    if(tipoTurnoForm.value.id == null){
      this.tipoturnoService.saveTipoTurno(tipoTurnoForm.value).subscribe(tipoTurno => location.reload());
      console.log(tipoTurnoForm);
    }else{
      this.tipoturnoService.updateTipoTurno(tipoTurnoForm.value).subscribe(tipoTurno => location.reload());
    }
  }

}
