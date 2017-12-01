import { NavController, NavParams, Content, ViewController, FabContainer } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Component, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { ViewChildren, QueryList, Renderer, ElementRef } from '@angular/core';

import { UserProvider } from '../../providers/user/user';

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
  }
  
  title:string;
  list = [];

  text:string;
  btn:any;
  index;
  move = false;

  form : FormGroup;
  pageItems = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    public user: UserProvider
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

  isNull(item) {
    return (item != null);
  }

  getItemType(type,item):boolean {
    // if (item=='label') console.log("getItem: " + (type == item));
    return (type==item);
  }

  reorderItems(indexes) {
    let element = this.pageItems[indexes.from];
    this.pageItems.splice(indexes.from, 1);
    this.pageItems.splice(indexes.to, 0, element);
  }

  editButton() {
    console.log("edicao");
  }
  
  editItem() {
    console.log("edicao item");
  }

  buttonAction() {
    console.log("btn action");
  }

  fabAction(fab: FabContainer) {
    fab.toggleList();
    //console.log(fabBtn+" action");  
  }

  closeFab(fab: FabContainer) {
    //console.log(fab);
    //fab.toggleList();
    fab.close();
  }

  // Editor Functions

  deleteItem(index, fab: FabContainer) {
    this.pageItems.splice(index, 1);
    fab.close();
  }

  moveItem(action, fab: FabContainer) {
    if (action == "done") this.move = false;
    this.move = true;
    if (fab != null) fab.close();
  }

  addItem(addType, pos, side, fab: FabContainer) {
    var newItem = {
      type: addType,
      text: "Default",
      color: "default",
      img: "assets/icon/logo.jpg"
    };
    this.pageItems.push(newItem);
    var itemIndex = {
      from: (this.pageItems.length - 1),
      to: ((side == 'up') ? pos : pos + 1)
    }
    this.reorderItems(itemIndex);
    fab.close();    
  }

  // DEPRECATED !!!

  edit() { 
    this.user.editor = !this.user.editor;
    console.log("edit: " + this.user.editor);
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
