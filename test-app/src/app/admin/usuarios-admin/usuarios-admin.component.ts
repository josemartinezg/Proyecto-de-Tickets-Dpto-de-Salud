import { UsuariosDataSource } from './../../models/UsuariosDataSource';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';


@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdminComponent {
  misUsuarios: Usuario[];
  displayedColumns: string[] = ['id','realm', 'username', 'email','buttons'];
  dataSource: UsuariosDataSource;
  authService: AuthService;

  private getAllTurnos(){
    this.authService.getUsers().subscribe(
      (usuarios: Usuario[]) => this.misUsuarios = usuarios);
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
