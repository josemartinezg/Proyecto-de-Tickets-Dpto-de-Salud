import { PuestoInterface } from './../../models/NumeroPuesto-interface';
import { PuestoService } from './../../services/puesto.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-puesto-admin',
  templateUrl: './puesto-admin.component.html',
  styleUrls: ['./puesto-admin.component.css']
})
export class PuestoAdminComponent implements OnInit {

  constructor(private dataApi: PuestoService, private dialog: MatDialog) { }
  private puestos : PuestoInterface;

  ngOnInit() {
    this.getListEstados();
  }

  getListEstados(): void{
    this.dataApi
    .getAllPuestos()
    .subscribe((puestos: PuestoInterface) => (this.puestos = puestos));

  }

  onDeletePuesto(id: string): void{ 
    if(confirm("Estas seguro en eliminar el puesto "+id+"?")) {
      this.dataApi.deletePuesto(id).subscribe();
      window.location.reload();
    }
  }

}
