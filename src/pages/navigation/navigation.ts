import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'nav-bar',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  title = 'BusDev';
  titleClass = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
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

  openSettings() {
    // const modal = this.modalCtrl.create(SettingsPage);
    // modal.present();
    this.modalCtrl.create(SettingsPage).present();
  }

}
