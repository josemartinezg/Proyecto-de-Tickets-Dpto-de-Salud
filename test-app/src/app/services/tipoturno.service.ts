import { TipoTurnoInterface } from './../models/TipoTurno-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Globals } from 'src/globals';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoturnoService {
  url: string;
  relation: string = 'consultas';
  constructor(private http: HttpClient, private glob: Globals, private authService : AuthService) { 
    this.url = this.glob.SERVER_URL + this.relation;
  }

  tipoturno:Observable<any>;

  public selectedTipoTurno: TipoTurnoInterface = {
    id_consulta:'',
    tipo_consulta:'',
    activo:false,
    id:null

  }

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json", 
    Authorization : this.authService.getToken()
    
  });

  getAllTipos(){
    return this.http.get(this.url);
  }

  saveTipoTurno(tipoTurno: TipoTurnoInterface){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = this.url +'?access_token=${token}';
    return this.http.post<TipoTurnoInterface>(url, tipoTurno,{headers: this.headers}).pipe(map(data => data));
  }

  updateTipoTurno(tipoTurno: TipoTurnoInterface){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = this.url +'?access_token=${token}';
    return this.http.put<TipoTurnoInterface>(url, tipoTurno,{headers: this.headers}).pipe(map(data => data));
  }

  deleteTipoTurno(id:string){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = this.url + id +'?access_token=${token}';
    return this.http.delete<TipoTurnoInterface>(url,{headers: this.headers}).pipe(map(data => data));
  }


}
