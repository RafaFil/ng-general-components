import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('loginForm') data! : LoginFormComponent;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  authentication(){
    this.userService.checkUser(
      this.data.logInForm.controls.username.value,
      this.data.logInForm.controls.password.value
    )
  }
}
