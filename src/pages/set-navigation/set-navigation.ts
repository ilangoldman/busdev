import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'set-navigation',
  templateUrl: 'set-navigation.html',
})
export class SetNavigationPage {
  
  @Input()
  parentSlider: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.parentSlider = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetNavigationPage');
  }

  setNav(navType) {
    console.log('nav: '+ navType);
    if (this.parentSlider != null) {
      this.parentSlider.slideNext();
    } else {
      this.navCtrl.pop();
    }
  }

}


@Component({
  selector: 'set-navigation-container',
  templateUrl: 'set-nav-container.html',
})
export class SetNavContainerPage {
  @ViewChild(Slides) navSlide: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetNavigationPage');
    this.navSlide.lockSwipes(true);
  }

}
