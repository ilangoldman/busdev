import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { NavSlides, ThemeSlides, MainPageSlides } from './BD';
//import { ModalPage } from  '../modal/modal';
import { SetUpPage } from  '../set-up/set-up';
import { UserProvider } from '../../providers/user/user';

// import { Config } from '../global';

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
    // {
    //   slide:ThemeSlides,
    //   title:"Choose your Theme",
    // }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    // var setUpType = navParams.data;
    var setUpType = 1;

    console.log(setUpType);
    
    this.slidesBD = this.view[setUpType].slide;
    this.title = this.view[setUpType].title;
    this.type = setUpType;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
    this.slides.direction = 'vertical';
    this.slides.loop = true;
    this.slides.paginationType = 'progress';
    this.slides.spaceBetween = 30;
  }

  select() {
    if (this.slides.getActiveIndex() != 1) {
      this.showBuyConfirm()
        .then(() => {
          if (++this.type == this.view.length) {
            this.navCtrl.setRoot(SetUpPage,2);
          } else {
            this.navCtrl.push(SliderPage,this.type);
          }
        }).catch( () => { } );
    } else {
      if (++this.type == this.view.length) {
        this.navCtrl.setRoot(SetUpPage,2);
      } else {
        this.navCtrl.push(SliderPage,this.type);
      }
    }
  }

  showBuyConfirm() : Promise<any> {
    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: 'This is a Paid Module',
        message: 'Are you sure you want to buy this awesome module?',
        buttons: [
          {
            text: 'Not Sure',
            handler: () => {
              reject();
            }
          },
          {
            text: 'Buy Now!',
            handler: () => {
              resolve();
            }
          }
        ]
      });
      confirm.present();
    });
  }

  back() {
    this.navCtrl.pop();
  }

}
