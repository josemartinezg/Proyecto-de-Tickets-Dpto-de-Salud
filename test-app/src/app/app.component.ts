import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  /* El selector es para traer HTML Markup del template relacionado con
  el componente.*/
  templateUrl: './app.component.html',
  /*Esta es la referencia al template. */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "";
  response: any;
  constructor(private http: HttpClient){
    
  }
  
  ngOnInit(){
    /*let obs = this.http.get('http://localhost:3000/');
    obs.subscribe((response) => console.log(response));*/
  }
  search(){
    this.http.get('http://localhost:3000/api/consultas?filter={"where":{"id_consulta": "est"}}')
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    }) 
  }
  
  post = {
    title: "PUCMM Salud",
    isActive: true
  }
}   
