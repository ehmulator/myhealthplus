import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginservice.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-user.component.html'
})

export class LoginComponent {
  model: any = {};
  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) { }
  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login() {
    debugger;
    this.LoginService.Login(this.model).subscribe(
      data => {
        if (data.Status == "Success") {
          this.router.navigate(['/Dashboard']);
        }
        else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  };
}
