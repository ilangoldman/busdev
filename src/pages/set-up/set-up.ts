import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

// Import Navigation Pages
import { HomePage } from '../home/home';
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
      image: "assets/img/busdev.png",
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPage');
  }

  ionViewWillEnter() {
    this.slides.slideTo(0);
  }

  actionButton() {
    if (this.slidesBD == this.slidesStart) {
      this.setUpParams();
    } else if (this.slidesBD == this.slideFinish) {
      this.finish();
    }
  }

  setUpParams() {
    this.slidesBD = this.slideFinish;
    this.navCtrl.push(SliderPage,0);
  }

  finish() {
    this.navCtrl.setRoot(HomePage);
  }
}
