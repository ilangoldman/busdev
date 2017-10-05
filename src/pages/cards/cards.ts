import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// BD simulator
import { cardsBD, fabBD } from './BD';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  //user: firebase.User;
  isAdmin: boolean = false;
  cards:any;
  FAB:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      //public auth: AuthProvider
  ) {
      //this.user = this.auth.getUser();
      //if (this.user.displayName == 'Ilan Goldman') 
      this.isAdmin = true;
      this.cards = cardsBD;
      this.FAB = fabBD;
      this.FAB[0].isHidden = this.isAdmin;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  logout() {
      // this.auth.logoutUser();
      // this.navCtrl.setRoot(HomePage);
  }

  fabAction(action:string) {
    switch(action) {
      case "logout":
        console.log("logging out...");
        break;
      case "settings":
        //this.navCtrl.push();
        break;
      case "add":
        //this.navCtrl.push();
        break;        
    }
  }

}
