import { AuthService } from './../services/auth.service';
import { Usuario } from 'src/app/models/Usuario';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


export class UsuariosDataSource extends DataSource<any>{
  filter: string;
    constructor(private authService: AuthService){
      super();
    }
    connect(): Observable<Usuario[]>{
        return this.authService.getUsers();
    }
    disconnect(){}
  }