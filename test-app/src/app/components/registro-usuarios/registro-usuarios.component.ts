import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserInterface } from 'src/app/models/User-interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  model: any = {};
  public isError = false;
  public msgError = '';
  private user: UserInterface = {
    name:'',
    email: '',
    password: ''
  };  
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  // registerUser(){
  //   this.authService.registerUser(this.user.name,this.user.email,this.user.password)
  //   .subscribe(user =>{
  //       console.log(user);
  //   })

  // }
  
  register(form: NgForm){
    if(form.valid){
      this.authService.register(this.model).subscribe(()=>{
        this.router.navigate(['/usuarios-admin']);
      }, res =>{
        this.msgError = res.error.error.details.messages.email;
        this.onIsError();
      })
    }else{
      this.onIsError(); 
    }
    
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  cancel(){
    console.log('cancelado');

  }

  


}
