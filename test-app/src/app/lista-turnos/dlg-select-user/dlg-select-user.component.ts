import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Puesto } from "../../models/Puesto";

export interface DialogData{
  perro: String;
}


@Component({
  selector: 'dlg-select-user',
  templateUrl: './dlg-select-user.component.html',
  styleUrls: ['./dlg-select-user.component.css']
})
export class DlgSelectUserComponent implements OnInit {
  puestoSeleccionado: string;
  puestos: string[] = ["1", "2"];
  

  constructor(
    public dialogRef: MatDialogRef<DlgSelectUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    onClick(){
      return this.puestoSeleccionado;
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {

  }
  
}
