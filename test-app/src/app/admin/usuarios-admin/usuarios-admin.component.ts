import { UsuariosService } from './../../services/usuarios.service';
import { UserInterface } from './../../models/User-interface';

import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdminComponent implements OnInit {

  constructor(private dataApi: UsuariosService, private dialog: MatDialog) { }
  private usuarios : UserInterface;
   ngOnInit() {
    this.getListUsers();
  }

  getListUsers():void{
    this.dataApi.getAllUsuarios().subscribe((usuarios: UserInterface) => (this.usuarios = usuarios));
  }

  onDeleteUser(id: string): void{ 
    if(confirm("Estas seguro en eliminar el usuario con "+id+"?")) {
      this.dataApi.deleteUsuario(id).subscribe();
      window.location.reload();
    }
  }


}
