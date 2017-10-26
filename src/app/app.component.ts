import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

// Debug
import { HomePage } from '../pages/home/home';
import { SetUpPage } from '../pages/set-up/set-up';
import { NavigationPage } from '../pages/navigation/navigation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SetUpPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    app:App
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //app._setDisableScroll(true);
    });
  }
}

