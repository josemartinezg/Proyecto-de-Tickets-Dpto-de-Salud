import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Puesto } from "../../models/Puesto";
import { TurnoService } from 'src/app/services/turno.service';
import { TurnosHoy } from 'src/app/components/tipo-turno-btn/TurnosHoy';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PrintService } from 'src/app/print.service';


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
  

  constructor(public dialogRef: MatDialogRef<DlgSelectUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private turnoService: TurnoService, private route: ActivatedRoute, private printService: PrintService) {}


    onClick(puestoSeleccionado){
      this.turnoIds = this.route.snapshot.params['turnosIds'];
      console.log(this.data.turno);
      this.turnoService.generarTurno(this.data.turno, puestoSeleccionado);
      var turnoHoy = new TurnosHoy();
      turnoHoy.getTurno(this.data.turno, this.turnoService.getCount());
      this.turnoService.imprimir(turnoHoy.codigo);
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    //this.turnoDetails = this.turnoIds.map(id => this.getTurnoDetails(id));
    Promise.all(this.turnoDetails).then(() => this.printService.onDataReady());
  }
  getTurnoDetails(turnoId){
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve => setTimeout(() => resolve({amount}), 1000));
  }
}
