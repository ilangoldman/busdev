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
  @ViewChild("slide2") s2: Slides;

  slidesBD = [];

  navSlides = [
    {
      description: "In App Navigation",
      image: "",
      title: 'In App'
    },
    {
      description: "Tabs",
      image: "assets/img/set-up/tabs.jpg",//"assets/img/tabs.jpg",
      title: 'Tabs'
    },
    {
      description: "Side Menu",
      image: "assets/img/set-up/sidemenu.jpg",// "assets/img/sidemenu2.png",
      title: 'SideMenu'
    }
  ];

  slidesStart = [
    {
      title: "Welcome to the BusDev App!",
      description: "The <b>Development</b> for <b>Business Man</b>!.",
      image: "assets/icon/logo.jpg",
      setButton: false,
      nav: false
    },
    {
      title: "Start Set Up!",
      description: "Let's do it",
      icon: 'ios-construct',
      setButton: true,
      buttonText: "Start",
      buttonIcon: "arrow-forward",
      nav: false
    },
    {
      nav: true
    },
    {
      title: "Set Up Completed!",
      description: "Let's go to your App",
      iconColor: "secondary",
      icon: 'md-checkmark-circle-outline',
      setButton: true,
      buttonText: "Finish",
      buttonIcon: "arrow-forward",
      nav: false
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {
    this.slidesBD = this.slidesStart;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPage');
    // this.s2.direction = 'vertical';
    // this.s2.loop = true;
  }

  ionViewWillEnter() {
    // TODO!! -> check where the view is comming from
    //this.setUpParams();
    // this.slides.slideTo(0);
  }

  slidesEnd() {
    console.log("s1 - end");
  }

  s2End() {
    console.log("s2 - end");
  }

  actionButton() {
    console.log(this.slides.getActiveIndex()); 
    console.log(this.slides.length()) ; 
    console.log(this.slides.id); 
    console.log(this.slides.isEnd());     
    
    // this.slides.slideNext();
    // if (this.slides.length == this.slides.slideId) {
    //   this.finish();
    // }
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
