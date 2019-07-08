import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData{
  perro: String;
}


@Component({
  selector: 'dlg-select-user',
  templateUrl: './dlg-select-user.component.html',
  styleUrls: ['./dlg-select-user.component.css']
})
export class DlgSelectUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DlgSelectUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }
  
}
