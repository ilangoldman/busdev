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

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    SetUpPage,
    SliderPage,
    BlankPage
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
    BlankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
