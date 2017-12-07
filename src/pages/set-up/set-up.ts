import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

// Import Navigation Pages
import { BlankPage } from '../blank/blank';
import { UserProvider } from '../../providers/user/user';

// import { Config } from '../global';

@Component({
  selector: 'page-set-up',
  templateUrl: 'set-up.html',
})
export class SetUpPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPage');
  }

  setNav(navType) {

  }

  finish() {
    this.user.setUpComplete = true;
    this.navCtrl.setRoot(BlankPage);
  }
}
