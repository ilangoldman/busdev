import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// BD simulator
//import { cardsBD, fabBD } from './BD';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //user: firebase.User;
  // isAdmin: boolean = false;
  // cards:any;
  // FAB:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      //public auth: AuthProvider
  ) {
      //this.user = this.auth.getUser();
      //if (this.user.displayName == 'Ilan Goldman') 
      // this.isAdmin = true;
      //this.cards = cardsBD;
      //this.FAB = fabBD;
      // this.FAB[0].isHidden = this.isAdmin;
      // console.log(this.FAB[0].isHidden);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  // logout() {
  //     // this.auth.logoutUser();
  //     // this.navCtrl.setRoot(HomePage);
  // }

  // fabAction(action:any) {
  //   // console.log(action);
  // }

}
