import { UserInterface } from './../../models/User-interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  private user: UserInterface = {
    email: '',
    password: ''
  };  

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    return this.authService.loginUser (this.user.email,this.user.password)
    .subscribe(
      data =>  {
          console.log(data);
      },
      
      error => console.log(error)
      );
  }


  // login(){
  //   this.authService.login(this.model).subscribe(data => {
  //     console.log(data);
  //   },error =>{
  //     console.log('Failed to login');

  //   });   
  // }

}
