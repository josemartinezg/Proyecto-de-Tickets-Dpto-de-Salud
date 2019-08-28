import { TipoTurnoInterface } from './../../models/TipoTurno-interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { TipoturnoService } from 'src/app/services/tipoturno.service';
import { NgForm } from '@angular/forms';
import { ModalTipoTurnoComponent } from '../components/modal-tipo-turno/modal-tipo-turno.component';

@Component({
  selector: 'app-tipoturno-admin',
  templateUrl: './tipoturno-admin.component.html',
  styleUrls: ['./tipoturno-admin.component.css']
})
export class TipoturnoAdminComponent implements OnInit {

  constructor(private dataApi: TipoturnoService, private dialog: MatDialog) { }
  private tipoTurnos: TipoTurnoInterface;
  ngOnInit() {
    this.getListTipos();
  }

  getListTipos(): void{
    this.dataApi
    .getAllTipos()
    .subscribe((tipoTurnos: TipoTurnoInterface) => (this.tipoTurnos = tipoTurnos));
  }

  onDeleteTipoTurno(id: string):void{
    if(confirm("Estas seguro en eliminar el tipo de turno "+id+"?")) {
      this.dataApi.deleteTipoTurno(id).subscribe();
      window.location.reload();
    }
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.autoFocus = true;
   this.dialog.open(ModalTipoTurnoComponent,dialogConfig);   
  }

  onPreUpdateTipoTurno(tipoTurno: TipoTurnoInterface):void{
    this.dataApi.selectedTipoTurno = Object.assign({},tipoTurno);
  }
  
  resetForm(tipoTurnoForm?: NgForm):void{
    this.dataApi.selectedTipoTurno = {
      id_consulta:'',
      tipo_consulta:'',
      activo: false,
      id:null
      
    }
  }

}
