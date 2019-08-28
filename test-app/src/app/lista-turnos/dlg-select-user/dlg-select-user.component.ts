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
  turnoTemp: any;
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
          this.turnoTemp = turno;
        }
      );
      this.onPrintZPL();
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
    var colA = '<p style="font-weight: bold; font-size: 2mm;">Ticket 10001</p>';
    var colB = '<p>Php 1500.00</p>';
    var currentDate = new Date();
    var printData = [
            { type: 'raw', format: 'file', data: 'assets/zpl_sample.txt', options: { language: 'ZPLII' } },
            '\n\n\n\n               Su turno:\n               ' + 'EMP' + '\n\n\n               Puesto:\n                   ' + '1' + '\n\n\n\n\n\n\n\n\n\n\n\n\n'
        ];    
    this.printService.printHTML(this.printerName, printData);
  }
}
