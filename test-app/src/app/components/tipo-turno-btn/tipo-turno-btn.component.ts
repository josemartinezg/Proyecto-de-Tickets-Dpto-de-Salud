import { Component, OnInit, Input, Output } from '@angular/core';
import { TipoTurnoBtnService } from './tipo-turno-btn.service';
import { HttpClient } from '@angular/common/http';
import { TurnosHoy } from './TurnosHoy';
import { DlgSelectUserComponent } from '../../lista-turnos/dlg-select-user/dlg-select-user.component';
import { TurnoService } from "../../services/turno.service";
import {MatBottomSheetModule, } from '@angular/material/bottom-sheet';
import { SelectUserComponent } from "../../lista-turnos/select-user/select-user.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { createAotUrlResolver } from '@angular/compiler';
import { Consulta } from '../../models/Consulta';

var count = 0;

@Component({
  selector: 'tipo-turno-btn',
  templateUrl: './tipo-turno-btn.component.html',
  styleUrls: ['./tipo-turno-btn.component.css']
})
export class TipoTurnoBtnComponent implements OnInit {
  animal: string;
  name: string;
  turnos: Consulta[];
  @Input('is-active') isActive: boolean;
  @Input('tipo_turno') tipo_turno: string;
  response: any;
  buttonName = 'Estudiante';
  misTurnos:TurnosHoy[];

  url = 'http://localhost:3000/api/turnos';
  constructor(private service: TipoTurnoBtnService, private turnoService: TurnoService, private http: HttpClient, public dialog: MatDialog) { 
    /*Cuando se le pone este parámetro al constructor se desacopla,
     el servicio del componente, que es lo que queremos. */
    //this.turnos = service.getTipoTurnoAlt(); 
    this.service.getTipoTurnoAlt().subscribe(turnoActual => {
      this.turnos = turnoActual; 
    });
   }

   cambioConfirmado(){
     console.log("hola");
   }
   
   openDialog(turno): void {
    this.dialog.open(DlgSelectUserComponent, {
      data: {turno},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });

    //this.generarTurno(turno);
  }


  generarTurno(turno){
   // this.turnoService.generarTurno(turno);
    // count++;
    // var turnoHoy = new TurnosHoy();
    // turnoHoy.getTurno(turno, count);
    // var dateTime = turnoHoy.getDate();
    // let post = {
    //   id_turno: turnoHoy.codigo,
    //   tipo_consulta: turno,
    //   id_usuario_atencion: "sorodriguez",
    //   fecha_hora_emision: dateTime,
    //   consulta_id: 1,
    //   usuarios_id: 2,
    //   estado_id: 1

    // }
    // this.http.get(this.url)
    // .subscribe((response) => {
    //     this.response = response;
    //     console.log(response);
    //   })
    // this.http.post(this.url, post)
    // .subscribe(response =>{
    // console.log(response);
    // })
    // console.log("Generar turno.");
  }


  ngOnInit() {
  }

}
