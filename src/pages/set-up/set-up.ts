import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

// Import Navigation Pages
import { CardsPage } from '../cards/cards';
import { SliderPage } from '../slider/slider';
import { UserProvider } from '../../providers/user/user';

// import { Config } from '../global';

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
      nav: false
    },
    {
      title: "Start Set Up!",
      description: "Let's do it",
      image: "",
      setRadio: true,
      setButton: true,
      buttonText: "Start",
      buttonIcon: "arrow-forward",
      nav: false
    },
    // {
    //   title: "Nav",
    //   description: "",
    //   image: "",
    //   setRadio: false,
    //   setButton: false,
    //   buttonText: "",
    //   buttonIcon: "",
    //   nav: true
    // }
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
      nav: false
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {
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

  // setUp() {
  //   console.log(this.slides.getActiveIndex());
  //   //setUpType = this.slides.getActiveIndex() - 2;
  //   console.log(setUpType);
  // }

  finish() {
    this.user.setUpComplete = true;
    this.navCtrl.setRoot(CardsPage);
  }
}
