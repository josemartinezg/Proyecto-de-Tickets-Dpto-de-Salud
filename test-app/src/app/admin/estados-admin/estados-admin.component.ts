import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { EstadoInterface } from './../../models/Estado-interface';
import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { isFulfilled } from 'q';
import { ModalComponent } from '../components/modal/modal.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-estados-admin',
  templateUrl: './estados-admin.component.html',
  styleUrls: ['./estados-admin.component.css']
})
export class EstadosAdminComponent implements OnInit {

  constructor(private dataApi: EstadoService, private dialog: MatDialog) { }
  private estados : EstadoInterface;


  ngOnInit() {
    this.getListEstados();
    
  } 

  getListEstados(): void{
    this.dataApi
    .getAllEstados()
    .subscribe((estados: EstadoInterface) => (this.estados = estados));

  }

  onDeleteEstado(id: string): void{
    if(confirm("Estas seguro en eliminar el estado"+id+"?")) {
      this.dataApi.deleteEstado(id).subscribe();
      window.location.reload();
    }
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.autoFocus = true;
   this.dialog.open(ModalComponent,dialogConfig);   
  }

  onPreUpdateEstado(estado: EstadoInterface):void{
    this.dataApi.selectedEstado = Object.assign({},estado);


  }

  resetForm(estadoForm?: NgForm):void{
    this.dataApi.selectedEstado = {
      id:null,
      nombre_estado:''
    }
  }


}
