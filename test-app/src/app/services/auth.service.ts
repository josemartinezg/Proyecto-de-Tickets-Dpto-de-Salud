import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'http://localhost:3000/api/Users/';

  constructor(private http: HttpClient) {
    
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
