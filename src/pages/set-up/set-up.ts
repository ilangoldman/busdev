import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

// Import Navigation Pages
import { CardsPage } from '../cards/cards';
import { SliderPage } from '../slider/slider';

@Component({
  selector: 'page-set-up',
  templateUrl: 'set-up.html',
})
export class SetUpPage {
  @ViewChild(Slides) slides: Slides;

  slidesBD = [];

  slidesStart = [
    {
      title: "Welcome to the BusDev App!",
      description: "The <b>Development</b> for <b>Business Man</b>!.",
      image: "assets/img/set-up/busdev.png",
      setRadio: false,
      setButton: false,
      buttonText: "OK",
      buttonIcon: "arrow-forward",
      shouldLockSwipeToNext: true
    },
    {
      title: "Start Set Up!",
      description: "Let's do it",
      image: "",
      setRadio: true,
      setButton: true,
      buttonText: "Start",
      buttonIcon: "arrow-forward",
      shouldLockSwipeToNext: false
    }
  ];

  slideFinish = [
    {
      title: "Set Up Completed!",
      description: "Let's go to your App",
      image: "",
      setRadio: true,
      setButton: true,
      buttonText: "Finish",
      buttonIcon: "arrow-forward",
      shouldLockSwipeToNext: false
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slidesBD = this.slidesStart;
    if (navParams.data==2) {
      this.slidesBD = this.slideFinish;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPage');
  }

  ionViewWillEnter() {
    // TODO!! -> check where the view is comming from
    //this.setUpParams();
    this.slides.slideTo(0);
  }

  actionButton() {
    if (this.slidesBD == this.slidesStart) {
      this.navCtrl.push(SliderPage,0);
    } else if (this.slidesBD == this.slideFinish) {
      this.finish();
    }
  }

  setUpParams() {
    this.slidesBD = this.slideFinish;
  }

  finish() {
    this.navCtrl.setRoot(CardsPage);
  }
}
