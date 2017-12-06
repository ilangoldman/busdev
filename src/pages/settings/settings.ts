import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { NavigationPage } from '../navigation/navigation';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // @ViewChild(NavigationPage) navbar: NavigationPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    // this.navbar.title = 'Settings';
    // this.navbar.titleClass = 'editor';
  }

  logout() {
    this.user.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  navigateTo(page:string) {
    switch(page) {
      case "PAGE":
        break;
    }
  }

}
