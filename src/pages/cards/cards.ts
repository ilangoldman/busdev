import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

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
      public user: UserProvider,
      public actionSheetCtrl: ActionSheetController
  ) {
      //this.user = this.auth.getUser();
      //if (this.user.displayName == 'Ilan Goldman')
      this.isAdmin = this.user.isAdmin;
      this.cards = cardsBD;
      this.FAB = fabBD;
      this.FAB[2].notHidden = this.isAdmin;
      
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
        this.user.logout();
        this.navCtrl.setRoot(LoginPage);
        break;
      case "settings":
        //this.navCtrl.push();
        break;
      case "add":
        //this.navCtrl.push();
        
        break;        
    }
  }

  longPressCard(card,i) {
    if (!this.isAdmin) return;
    const actionSheet = this.actionSheetCtrl.create({
      title: card.title,
      buttons: [
        {
          text: 'Move',
          handler: () => {
            
          }
        },
        {
          text: 'Edit',
          handler: () => {
            console.log('Edit')
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.cards.splice(i,1);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
