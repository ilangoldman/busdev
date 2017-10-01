import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { NavSlides, ThemeSlides, MainPageSlides } from './BD';
//import { ModalPage } from  '../modal/modal';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  @ViewChild(Slides) slides: Slides;
  slidesBD:any;
  title:string;
  type:any;
  view = [ 
    {
      slide:NavSlides,
      title:"Choose your Navigation"
    },
    {
      slide:MainPageSlides,
      title:"Choose your main page"
    },
    {
      slide:ThemeSlides,
      title:"Choose your Theme",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.slidesBD = this.view[navParams.data].slide;
    this.title = this.view[navParams.data].title;
    this.type = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  select() {
    console.log( this.slides.getActiveIndex() );
    console.log( "type: " + this.type);
    console.log( 'view.length: ' + this.view.length);
    // if (this.slidesBD == MainPageSlides) {
    //   this.navCtrl.push(ModalPage,this.slides.getActiveIndex());
    // } else 
    if (++this.type == this.view.length) {
      this.navCtrl.popToRoot();
    } else {
      this.navCtrl.push(SliderPage,this.type);
    }
    //this.appCtrl.getRootNav().push(SliderPage,i)
  }

}
