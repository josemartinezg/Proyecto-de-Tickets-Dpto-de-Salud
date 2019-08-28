import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Globals } from 'src/globals';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/User-interface';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string;
  relation: string = 'usuarios';

  constructor(private http: HttpClient, private glob: Globals, private authService : AuthService) { 
    this.url = this.glob.SERVER_URL + this.relation;
  }

  usuario:Observable<any>;
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json", 
    Authorization : this.authService.getToken()
    
  });

  getAllUsuarios(){
    return this.http.get(this.url);
  }

  deleteUsuario(id:string){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = this.url + '/'+ id +'?access_token=${token}';
    return this.http.delete<UserInterface>(url,{headers: this.headers}).pipe(map(data => data));
  }

 
}
