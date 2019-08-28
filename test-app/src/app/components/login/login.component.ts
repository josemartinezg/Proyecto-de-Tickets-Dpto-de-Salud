import { UserInterface } from './../../models/User-interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  public isError = false;
  private user: UserInterface = {
    email: '',
    password: ''
  };  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginUser(this.user.email, this.user.password)
        .subscribe(
        data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/admin']);
          //location.reload();
          this.isError = false;
        },
        error => {this.isError = true;}
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


  // login(){
  //   this.authService.login(this.model).subscribe(data => {
  //     console.log(data);
  //   },error =>{
  //     console.log('Failed to login');

  //   });   
  // }

}
