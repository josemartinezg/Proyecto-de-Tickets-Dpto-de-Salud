import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Puesto } from "../../models/Puesto";
import { TurnoService } from 'src/app/services/turno.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, interval } from 'rxjs';
import { QzTrayService } from '../../services/qz-tray.service';
import { Turno } from 'src/app/models/Turno';

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
  misTurnos1: Turno[];
  misTurnos2: Turno[];
  @Output() change = new EventEmitter();
  

  constructor(public dialogRef: MatDialogRef<DlgSelectUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private turnoService: TurnoService,
  public wsService: WebsocketService, private printService: QzTrayService) {}
    onClick(puestoSeleccionado){
      console.log(this.data.turno);
      this.turnoService.createTurno(this.data.turno, puestoSeleccionado)
      .subscribe(
        turno => {
          console.log(turno);
        }
      );
    }

    onOtherClick(){
      this.turnoService.getTurnosEstado1().subscribe(misTurnos1 => {this.misTurnos1 = misTurnos1
      console.log(misTurnos1)});
      this.turnoService.getTurnosEstado2().subscribe(misTurnos2 => {this.misTurnos2 = misTurnos2
      console.log(misTurnos2)}); 
      this.fuckThisShit();
      
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

   fuckThisShit(){
    
    if(this.misTurnos1.length < this.misTurnos2.length){
      this.turnoService.createTurno(this.data.turno, "1");
    }else{
      this.turnoService.createTurno(this.data.turno, "2");
    }
  }

  ngOnInit() {}
}
