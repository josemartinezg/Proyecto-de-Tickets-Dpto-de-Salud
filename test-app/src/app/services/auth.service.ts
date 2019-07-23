import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { isNullOrUndefined } from 'util';
import { Globals } from '../../globals';
import { GeneralConfig } from '../../app/pro_config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*Probar */
  url:string;
  relation: string = 'Users/'

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"aplication/json"
  });
  
   setToken(token){
     localStorage.setItem("token",token);

   }

   getToken(){
     return localStorage.getItem("token");
  /*constructor(private http: HttpClient, private glob: Globals) {
    this.url = this.glob.SERVER_URL + this.relation;*/
   }

   login(model:any){
     return this.http.post(this.url + 'login',model).pipe(
       map((response: any) => {
         const user = response;
         if(user){
           this.setToken('token');
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

  
  getCurrentUser(){
    let userString = localStorage.getItem("currentUser");
    if(isNullOrUndefined(userString)){
      let user = JSON.parse(userString);
      return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    let accessToken = localStorage.getItem('accessToken');
    const url = 'http://localhost:3100/api/Users/logout?access_token=${accessToken}';
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.http.post(url,{headers : this.headers})
  }
}
 