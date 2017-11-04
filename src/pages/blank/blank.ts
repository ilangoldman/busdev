import { NavController, NavParams, Content, ViewController, FabContainer } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Component, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { ViewChildren, QueryList, Renderer, ElementRef } from '@angular/core';



import { NavigationPage } from '../navigation/navigation';
import { mockBD } from './BD'; 

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  // @ViewChild(Content) content: Content;
  @ViewChild(NavigationPage) navbar: NavigationPage;

  editNav() {
    this.navbar.title = 'Settings';
    this.navbar.titleClass = 'editor';
  }
  
  title:string;
  list = [];

  text:string;
  btn:any;
  isEdit:boolean;
  index;

  form : FormGroup;
  pageItems: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder
  ) {
    this.pageItems = mockBD;

    this.form = this.formBuilder.group({
      Title: ['', Validators.required],
      Subtitle: ['', Validators.required],
      Image: ['', ],
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

  getItemType(type,item):boolean {
    return (type==item);
  }

  reorderItems(indexes) {
    let element = this.pageItems[indexes.from];
    this.pageItems.splice(indexes.from, 1);
    this.pageItems.splice(indexes.to, 0, element);
  }

  deleteItem(index) {
    this.pageItems.splice(index, 1);
  }


  // Editor Functions

  addItem(addType) {
    var newItem = {
      type: addType,
      label: "Default",
      button: {
        label: "Default",
        icon: "add",
        color: "default",
        outline: true,
        left: true,
        block: true
      },
      card: {
        header: "Default",
        content: "Default"
      }
    }
    this.pageItems.push(newItem);
  }

  // DEPRECATED !!!

  edit() { 
    this.isEdit = !this.isEdit;
  }

  itemButton(action) {
    
  }

  back() {
    this.navCtrl.pop();
  }

  done() {
    let data = { 
      title: this.form.value.Title,
      subtitle: this.form.value.Subtitle,
      i: this.index
    };
    this.viewCtrl.dismiss(data);
  }

}
