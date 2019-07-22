import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { EstadoInterface } from'../models/Estado-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient, private authService : AuthService) { }
    estados: Observable<any>;
    estado: Observable<any>;

    public selectedEstado: EstadoInterface = {
      id:null,
      nombre_estado:''
    }
 
    headers : HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json", 
      Authorization : this.authService.getToken()
      
    });

  
  getAllEstados(){
    const url = 'http://localhost:3000/api/estados';
    return this.http.get(url);
  }

  saveEstado(estado: EstadoInterface){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = 'http://localhost:3000/api/estados?access_token=${token}';
    return this.http.post<EstadoInterface>(url, estado,{headers: this.headers}).pipe(map(data => data));
  }

  updateEstado(estado: EstadoInterface){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = 'http://localhost:3000/api/estados?access_token=${token}';
    return this.http.put<EstadoInterface>(url, estado,{headers: this.headers}).pipe(map(data => data));
  }

  deleteEstado(id:string){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url = 'http://localhost:3000/api/estados/'+ id +'?access_token=${token}';
    return this.http.delete<EstadoInterface>(url,{headers: this.headers}).pipe(map(data => data));
  }
}
