import { NavController, NavParams, Content, ViewController, FabContainer, PopoverController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Component, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { ViewChildren, QueryList, Renderer, ElementRef } from '@angular/core';

import { UserProvider } from '../../providers/user/user';

import { NavigationPage } from '../navigation/navigation';
import { NewItemPopoverPage } from '../new-item-popover/new-item-popover';

import { mockBD } from './BD'; 

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  // @ViewChild(Content) content: Content;
  @ViewChild(NavigationPage) navbar: NavigationPage;
  @ViewChild(FabContainer) fab: FabContainer;  

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
    public user: UserProvider,
    private popoverCtrl: PopoverController
  ) {
    this.pageItems = mockBD;
    // this.form = this.formBuilder.group({
    //     Title: ['', Validators.required],
    //     Subtitle: ['', Validators.required],
    //     Image: ['', ],
    // });
  }

  getItemType(type,item,pos?):boolean {
    if (pos != null) {
      console.log("getItem: " + this.pageItems[pos].text);
      console.log("getItem2: " +type+"|"+item+"|"+ (type == item));
      
    }
    return (type==item);
  }

  reorderItems(indexes) {
    let element = this.pageItems[indexes.from];
    this.pageItems.splice(indexes.from, 1);
    this.pageItems.splice(indexes.to, 0, element);
  }

  closeFab(fab: FabContainer) {
    //console.log(fab);
    //fab.toggleList();
    fab.close();
  }

  toggleFab() {
    console.log(this.fab);
    this.fab.toggleList();
    // fab.close();
  }

  // Editor Functions

  deleteItem(index, fab: FabContainer) {
    this.pageItems.splice(index, 1);
    fab.close();
  }

  moveItem(action, fab: FabContainer) {
    this.user.moveItems(true);
    if (fab != null) fab.close();
  }

  addItem(addType, pos, side) {
    var newItem = {
      type: addType,
      text: "Clique aqui para trocar o texto",
      color: "editor",
      img: "assets/icon/logo.jpg"
    };
    this.pageItems.push(newItem);
    var itemIndex = {
      from: (this.pageItems.length - 1),
      to: ((side == 'up') ? pos : pos + 1)
    }
    this.reorderItems(itemIndex);
    console.log(this.pageItems);
  }

  newItem(fab: FabContainer, pos, side) {
    let popover = this.popoverCtrl.create(NewItemPopoverPage);

    popover.present();
    popover.onDidDismiss((data) => {
      if (data != null) this.addItem(data,pos,side);
    });
    fab.close();
  }

  editItem(pos,label) {
    console.log("item: " + pos + " - " + label + " - " + this.pageItems[pos].text);
    this.pageItems[pos].text = label;
    console.log("item: " + pos + " - " + label + " - " + this.pageItems[pos].text);
    
  }
  // DEPRECATED !!!

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
