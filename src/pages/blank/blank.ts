import { Component } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  @ViewChild(Content) content: Content;

  title:string;
  text:string;
  btn:string;
  isEdit:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "BUSDEV !!";
    this.text = "HELLO WORLD!!";
    this.btn = "OK ?";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

  edit() { 
    this.isEdit = !this.isEdit;
  }

}
