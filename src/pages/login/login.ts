import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { CardsPage } from '../cards/cards';
import { SetUpPage } from '../set-up/set-up';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm : FormGroup;
  hasError: boolean;
  errorMessage: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private formBuilder: FormBuilder,
      private auth: AuthProvider,
      private user: UserProvider
  ) {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logInWithFacebook() {
    this.auth.loginWithFacebook()
      .then(() => {
          if (!this.user.setUpComplete)
            this.navCtrl.setRoot(SetUpPage);
          else        
            this.navCtrl.setRoot(CardsPage);
      }).catch((error) => {
          console.log(error);
      });
  }

  signInWithEmail(email,pwd) {
      this.auth.loginEmail(email,pwd)
          .then(() => {
            if (!this.user.setUpComplete)
            this.navCtrl.setRoot(SetUpPage);
          else        
            this.navCtrl.setRoot(CardsPage);
          }).catch((error) => {
            this.errorMessage = error;
            this.hasError = true;
          });
        // console.log(this.user.name + " -> " + this.user.isAdmin + " || " + this.user.setUpComplete);
  }

  navigateTo(page: string) {
    switch (page) {
      case "signup":
        this.navCtrl.setRoot(SignupPage);      
        break;
    }
  }

  close() {
    this.hasError = false;
  }


}
