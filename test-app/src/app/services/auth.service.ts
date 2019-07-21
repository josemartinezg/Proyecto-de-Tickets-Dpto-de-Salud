import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { Globals } from '../../globals';
import { GeneralConfig } from '../../app/pro_config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*Probar */
  url:string;
  relation: string = 'Users/'

  constructor(private http: HttpClient, private glob: Globals) {
    this.url = this.glob.SERVER_URL + this.relation;
   }
   login(model:any){
     return this.http.post(this.url + 'login',model).pipe(
       map((response: any) => {
         const user = response;
         if(user){
           localStorage.setItem('token',user.token);
         }
       }) 
       
     )
   }

   register(model:any){
     return this.http.post(this.url,model);
   }

   getUsers():Observable<Usuario[]>{
     return this.http.get<Usuario[]>(this.url);
     }
}
