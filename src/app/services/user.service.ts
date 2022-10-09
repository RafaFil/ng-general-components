import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersArr : User[] = [
    {name:"JoyBoy_64",password:"12345678"},
    {name:"admin",password:"admin"},
  ]

  constructor() { }

  checkUser(name : string | null,password : string | null) : boolean{
    for (const user of this.usersArr) {
        if(user.name === name && user.password === password){
          return true
        }
    }
    return false
  }
}
