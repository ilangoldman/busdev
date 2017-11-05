import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { BlankPage } from '../blank/blank';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  title = 'BusDev';
  titleClass = '';
  color = "light";

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
    if (page == 'settings') {
      
      this.navCtrl.push(SettingsPage,this);
      // this.titleClass = 'editor';      
    }
  }

  toggleChanged(value) {
    console.log("toogle");
    if (value == true) {
      this.color = "danger";
      this.user.editor = true;
    } else {
      this.color = "light"; 
      this.user.editor = false;
    } 
  }

  openSettings() {
    // const modal = this.modalCtrl.create(SettingsPage);
    // modal.present();
    this.modalCtrl.create(SettingsPage).present();
  }

}
