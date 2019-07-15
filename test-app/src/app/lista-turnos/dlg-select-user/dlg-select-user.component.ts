import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Puesto } from "../../models/Puesto";
import { TurnoService } from 'src/app/services/turno.service';

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
  turnoIds: string[];
  turnoDetails: Promise<any>[];
  @Output() change = new EventEmitter();
  

  constructor(public dialogRef: MatDialogRef<DlgSelectUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private turnoService: TurnoService) {}


    onClick(puestoSeleccionado){
      console.log(this.data.turno);
      this.turnoService.generarTurno(this.data.turno, puestoSeleccionado);
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {}
}
