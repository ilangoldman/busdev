import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

import { BlankPage } from '../blank/blank';

import { mockBD } from './BD';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('userTabs') tabs: Tabs;

  rootPage = BlankPage;

  tabsPages = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {
    this.tabsPages = mockBD;
  }

  ionViewDidEnter() {
    console.log(this.tabsPages);
    this.tabs.tabsLayout = "title-hide";
    this.tabs.tabsHighlight = false;
    console.log(this.tabs.tabsLayout);
    this.tabs.select(2);
  }

  open() {
    console.log("open fab");
  }

}
