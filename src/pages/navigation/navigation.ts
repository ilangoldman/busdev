import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { BlankPage } from '../blank/blank';
import { SetNavContainerPage } from '../set-navigation/set-navigation';


import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  title = 'BusDev';
  color = "client";
  icon = "ios-create-outline";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public user: UserProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  navigateTo(page:string) {
    switch (page) {
      case 'settings':
        this.navCtrl.push(SettingsPage);
        break;
      case 'setNavigation':
        this.navCtrl.push(SetNavContainerPage);
        break;
    }
  }

  toggleEdit() {
    console.log("toogle   ");
    this.user.editor = !this.user.editor;
    if (this.user.editor == true) {
      this.color = "editor";
      this.title = "BusDev";
      this.icon = "ios-eye";
    } else {
      this.color = "client";
      this.title = "App Cliente";
      this.icon = "ios-create-outline";
    } 
    
  }

  openSettings() {
    // const modal = this.modalCtrl.create(SettingsPage);
    // modal.present();
    this.modalCtrl.create(SettingsPage).present();
  }

  move() {
    this.user.moveItems(false);
  }

}
