import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  user = [];
  name:string;
  img:any;
  isAdmin:boolean;
  isLogged:boolean = false;
  setUpComplete:boolean = false;

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  login(name,isAdmin): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.isLogged) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.isLogged = true;
        resolve();
      } else
        reject('Fail to Login!');
    });
    
  }

  logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.isLogged) {
        this.isLogged = false;
        resolve();
      } else
        reject('User not Logged!');
    });
  }

  loginEmail(email,pwd) : Promise<any> {
    

    return new Promise((resolve, reject) => {
      if (email == 'ilan@goldman.com' && pwd == 'ilan') {
        this.name = 'Ilan Goldman';
        this.isAdmin = true;
        this.isLogged = true;
        resolve();
      } else if (email = 'lucas@deliberato.com' && pwd == 'lucas') {
        this.name = 'Lucas Deliberato';
        this.isAdmin = false;
        this.isLogged = true;
        resolve();
      } else {
        reject('Invalid email or password!')
      }
    });
  }

}
