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
  /* Cambiar para poder utilizar los puestos que cree el usuario.*/
  puestos: string[] = ["1", "2"];
  optSelected = false;
  misTurnos1: Turno[];
  misTurnos2: Turno[];
  /* Hasta aqui. */
  turnoIds: string[];
  turnoDetails: Promise<any>[];
  misTurnos: Turno[] = [];
  printerName = "Generic / Text Only";
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
      this.getAllTurnos();
      this.onPrintZPL();
    }
    private getAllTurnos(){
      this.turnoService.getTurno().subscribe(
        (turnos: Turno[]) => this.misTurnos = turnos);
        setTimeout(function(){
          console.log(this.turnos);
        }, 3000);
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
  
  clickOption(){
    this.optSelected = true;
  }
  isDisabled(){
    return 'disabled';
  }
  onPrintZPL() {
  //   var currentDate = new Date();
  //   var printData = [
  //           { type: 'raw', format: 'file', data: 'assets/zpl_sample.txt', options: { language: 'ZPLII' } },
  //           '\n\n\n\n               Su turno:\n               ' 
  //           + this.turnoTemp.id_turno + '\n\n\n               Puesto:\n                   ' 
  //           + this.turnoTemp.no_puesto + '\n' 
  //           + currentDate
  //           + '\n\n\n\n\n\n\n\n\n\n\n\n\n'
  //       ];    
  //   this.printService.printHTML(this.printerName, printData);
  // 
  }
}
