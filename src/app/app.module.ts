import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CardsPage } from '../pages/cards/cards';
import { SetUpPage } from '../pages/set-up/set-up';
import { SliderPage } from '../pages/slider/slider';
import { BlankPage } from '../pages/blank/blank';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { NavigationPage } from '../pages/navigation/navigation';
import { NewItemPopoverPage } from '../pages/new-item-popover/new-item-popover';

import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';

import { NavController } from 'ionic-angular';


import { BD } from '../pages/cards/BD';

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    SetUpPage,
    SliderPage,
    BlankPage,
    LoginPage,
    SignupPage,
    NavigationPage,
    HomePage,
    SettingsPage,
    NewItemPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    SetUpPage,
    SliderPage,
    BlankPage,
    LoginPage,
    SignupPage,
    NavigationPage,
    HomePage,
    SettingsPage,
    NewItemPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    BD
  ]
})
export class AppModule {}
