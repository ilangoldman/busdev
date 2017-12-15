import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';


import { LoginPage } from '../login/login';
import { BlankPage } from '../blank/blank';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  title="Sign up";
  errorMessage = "";
  hasError = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public user: UserProvider
  ) {
  
  }

  signUpWithEmail(email,name,pwd,pwd2) {
    if (pwd != pwd2) {
      this.errorMessage = "Passwords don't match";
      this.hasError = true;
      return
    }
    // this.auth.signUp(email,name,pwd)
    //   .then(() => {
    //     console.log("ok");
    //     this.auth.loginEmail(email, pwd)
    //       .then(() => {
    //           this.navCtrl.setRoot(BlankPage);
    //       }).catch((error) => {
    //         this.errorMessage = error;
    //         this.hasError = true;
    //         this.navCtrl.setRoot(LoginPage);
    //       });
    //   }).catch((error) => {
    //     this.errorMessage = error;
    //     this.hasError = true;
    //   });
    this.user.name = name;
    this.user.isAdmin = false;
    this.user.isLogged = true;
    this.navCtrl.setRoot(BlankPage);
  }

  navigateTo(page: string) {
    switch (page) {
      case "login":
        this.navCtrl.setRoot(LoginPage);
        break;
    }
  }

}
