import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  id:number;
  name:string;
  img:any;
  email:string;
  isAdmin:boolean;
  isLogged:boolean = false;
  setUpComplete:boolean = false;
  editor:boolean = false;
  editorMove:boolean = false;

  constructor() {
    console.log('Hello UserProvider Provider');
    this.isAdmin = true;
    this.name = "Ilan Goldman";
  }

  setUserInfo(id,name,email,image,admin) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.img = image;
    this.isAdmin = (admin == 1);
    this.isLogged = true
    console.log(this);
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.isLogged) {
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

  moveItems(moveOption) {
    this.editorMove = moveOption;
    this.editor = !moveOption;
  }

}
