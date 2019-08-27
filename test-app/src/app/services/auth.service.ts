import { Globals } from '../../globals';
  
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { UserInterface } from '../models/User-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*Probar */
  url:string;
  relation: string = 'Users/'

  constructor(private htttp: HttpClient,private glob: Globals) {
    this.url = this.glob.SERVER_URL + this.relation;
  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type":"aplication/json"
  });

  registerUser(name: string, email:string, password:string){
    const url = this.url;
    return this.htttp.post<UserInterface>(url,{name,email,password},{headers:this.headers}).pipe(map(data => data));
  }
  
  loginUser(email: string, password: string): Observable<any> {
    const url_api = this.url+"login?include=user";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user):void{
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser',user);
  }

  setToken(token):void{
    localStorage.setItem("accessToken",token);
  }
 
  getToken(){
    return localStorage.getItem("accessToken");
 /*constructor(private htttp: HttpClient, private glob: Globals) {
   this.url = this.glob.SERVER_URL + this.relation;*/
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
    const url =  this.url + 'logout?access_token=${accessToken}';
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.htttp.post(url,{headers : this.headers})
  }

  

  //  login(model:any){
  //    return this.htttp.post(this.url + 'login?include=user',model).pipe(
  //      map((response: any) => {
  //        const user = response;
  //        if(user){
  //          this.setToken('token');
  //        }
  //      }) 
       
  //    )
  //  }

  

  //  register(model:any){
  //    return this.htttp.post(this.url,model);
  //  }


  
 
}
 