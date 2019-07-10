import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  register(){
    this.authService.register(this.model).subscribe(()=>{
      console.log('registrado');
    }, error =>{
      console.log(error);
    })
  }

  cancel(){
    console.log('cancelado');

  }

  


}
