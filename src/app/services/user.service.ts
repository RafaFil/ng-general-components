import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  usersArr : User[] = [
    {name:"JoyBoy_64",password:"12345678"},
    {name:"admin",password:"admin"},
  ]

  constructor(private router : Router) { }

  checkUser(name : string | null,password : string | null) {
    for (const user of this.usersArr) {
        if(user.name === name && user.password === password){
          this.router.navigate(['home'])
        }
    }
  }
}
