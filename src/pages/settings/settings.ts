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
  isAdmin:boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {
    // this.navbar = navParams.data;
    this.isAdmin = true;
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
      case "feedback":
        break;
    }
  }

  editor(val:any,xx:any) {
    console.log("edit");
    console.log(val);
    console.log(xx);
    
  }

}
