import { Component } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  // @ViewChild(Content) content: Content;

  title:string;
  content = [];

  text:string;
  btn:any;
  isEdit:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content = this.navParams.get('content');

    this.title = this.navParams.get('title');
    this.text = this.navParams.get('text');
    this.btn = this.navParams.get('btn');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

  edit() { 
    this.isEdit = !this.isEdit;
  }

}
