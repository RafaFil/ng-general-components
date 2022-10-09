import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logInForm = this.formBuilder.group(
    {
      username : [''],
      password : ['']
    }
  )

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
