import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { BlankPage } from '../blank/blank';

// BD simulator
import { BD, fabBD } from './BD';

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
      public actionSheetCtrl: ActionSheetController,
      public modalCtrl: ModalController,
      public bd: BD
  ) {
      //this.user = this.auth.getUser();
      //if (this.user.displayName == 'Ilan Goldman')
      this.isAdmin = this.user.isAdmin;
      this.cards = this.bd.cardsBD;
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
        const profileModal = this.modalCtrl.create(BlankPage, this.cardEditorBD);
        profileModal.onDidDismiss(data => {
          console.log(this.bd.cardsBD);
          if (data != null) {     
            var card = {
              img: "",
              title: data.title,
              subtitle: data.subtitle
            }
            this.bd.cardsBD.push({
              img: "assets/icon/logo.jpg",
              title: data.title,
              subtitle: data.subtitle
            });
            console.log(this.bd.cardsBD);
            this.navCtrl.setRoot(CardsPage);
          }
        });
        profileModal.present();
        break;        
    }
  }

  cardEditorBD = {
    title: "",
    text: "",
    btn: {
      isHidden: true,
      text: "Done"
    },
    i: 0,
    content: [
      {
        label: "Title",
        isItem: true,
        hasIcon: false,
        icon: "",
        hasInput: true,
        input: "",
        hasToggle: false,
        toggleColor: "",
        isButton: false,
        action: "",
        hasNote: false,
        note: ""
      },
      {
        label: "Subtitle",
        isItem: true,
        hasIcon: false,
        icon: "",
        hasInput: true,
        input: "",
        hasToggle: false,
        toggleColor: "",
        isButton: false,
        action: "",
        hasNote: false,
        note: ""
      },
      {
        label: "Image",
        isItem: true,
        hasIcon: false,
        icon: "",
        hasInput: true,
        input: "",
        hasToggle: false,
        toggleColor: "",
        isButton: false,
        action: "",
        hasNote: false,
        note: ""
      },
      // {
      //   label: "Link to Page",
      //   isItem: true,
      //   hasIcon: false,
      //   icon: "",
      //   hasInput: false,
      //   input: "",
      //   hasToggle: true,
      //   toggleColor: "",
      //   isButton: false,
      //   action: "",
      //   hasNote: true,
      //   note: "<i>None</i>"
      // }
    ]
  }

  longPressCard(card,i) {
    if (!this.isAdmin) return;
    const actionSheet = this.actionSheetCtrl.create({
      title: card.title,
      buttons: [
        {
          text: 'Move',
          icon: 'md-reorder',
          handler: () => {
            
          }
        },
        {
          text: 'Edit',
          icon: 'logo-steam',
          handler: () => {
            var cardEditorTemp = this.cardEditorBD;
            cardEditorTemp.content[0].input = card.title;
            cardEditorTemp.content[1].input = card.subtitle;
            cardEditorTemp.i = i;
            const profileModal = this.modalCtrl.create(BlankPage,cardEditorTemp);
            profileModal.onDidDismiss(data => {
              this.cards[data.i].title = data.title;
              this.cards[data.i].subtitle = data.subtitle;
            });
            profileModal.present();
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
