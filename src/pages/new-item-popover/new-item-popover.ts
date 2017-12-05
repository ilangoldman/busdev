import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-new-item-popover',
  templateUrl: 'new-item-popover.html',
})
export class NewItemPopoverPage {

  constructor(public viewCtrl: ViewController) {
  }

  addItem(type) {
    this.viewCtrl.dismiss(type);
  }

}
