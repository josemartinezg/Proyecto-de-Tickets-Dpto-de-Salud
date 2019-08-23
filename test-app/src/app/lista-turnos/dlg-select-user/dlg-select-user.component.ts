import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Puesto } from "../../models/Puesto";
import { TurnoService } from 'src/app/services/turno.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription, interval } from 'rxjs';
import { Turno } from 'src/app/models/Turno';
import { resolve } from 'url';

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
  public wsService: WebsocketService) {}

  print() {
    let printContents, popupWin;
    let titulo = "this.config.empresa;"
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=600%,width=600%');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${titulo}</title>
          <style>
          h1{ 
            font-size: 1.8em;
            color: #222;
          }
          h2{font-size: 1.1em;}
          h3{
            font-size: 1.2em;
            font-weight: 300;
            line-height: 2em;
          }
          p{
            font-size: 1em;
            color: #222;
            line-height: 1.5em;
          }

          #top, #mid,#bot{ /* Targets all id with 'col-' */
            border-bottom: 2.4px solid #222;
          }
          #top{min-height: 100px;}
          #mid{min-height: 80px;}
          #bot{ min-height: 50px;}
          #top .logo{
            //float: left;
              height: 60px;
              width: 60px;
              background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;
              background-size: 60px 60px;
          }
          .clientlogo{
            float: left;
              height: 60px;
              width: 60px;
              background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
              background-size: 60px 60px;
            border-radius: 50px;
          }
          .info{
            display: block;
            float:left;
            margin-left: 0;
          }
          .title{
            float: right;
          }
          .title p{text-align: right;}
          table{
            width: 100%;
            border-collapse: collapse;
          }
          td{
            //padding: 5px 0 5px 15px;
            //border: 1px solid #EEE
          }
          .tabletitle{
            //padding: 5px;
            font-size: .9em;
            background: #222;
          }
          .service{border-bottom: 2.2px solid #222;}
          .item{width: 27mm;}
          .itemtext{font-size: .8em;}
          #legalcopy{
            margin-top: 5mm;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
    onClick(puestoSeleccionado){
      console.log(this.data.turno);
      this.turnoService.createTurno(this.data.turno, puestoSeleccionado)
      .subscribe(
        turno => {
          console.log(turno);
        }
        
      );
      //this.print();
    }

    onOtherClick(){
      const TmisTurnos1 = this.turnoService.getTurnosEstado1().subscribe(misTurnos1 => {this.misTurnos1 = misTurnos1
      console.log(misTurnos1)
      misTurnos1.reduce((a,obj) => a + Object.keys(obj).length, 0)});
      const TmisTurnos2 = this.turnoService.getTurnosEstado1().subscribe(misTurnos2 => {this.misTurnos2 = misTurnos2
      console.log(misTurnos2)
       misTurnos2.reduce((a,obj) => a + Object.keys(obj).length, 0)});
      //const TmisTurnos1 = this.misTurnos1.reduce((a, obj) => a + Object.keys(obj).length, 0);
      //const TmisTurnos2 = this.misTurnos2.reduce((a, obj) => a + Object.keys(obj).length, 0);
      //setTimeout(, 2000);
      this.fuckThisShit(TmisTurnos1, TmisTurnos2);
    }
    
    fuckThisShit(TmisTurnos1: any, TmisTurnos2: any){
      
      if(TmisTurnos1 < TmisTurnos2){
        this.turnoService.createTurno(this.data.turno, "1");
      }else{
        this.turnoService.createTurno(this.data.turno, "2");
      }      
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  sendLiveTicket(){
    
  }

  

  ngOnInit() {}
}
