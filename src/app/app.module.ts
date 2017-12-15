import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { SetUpPage } from '../pages/set-up/set-up';
import { BlankPage } from '../pages/blank/blank';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { NavigationPage } from '../pages/navigation/navigation';
import { SetNavigationPage, SetNavContainerPage } from '../pages/set-navigation/set-navigation';
import { NewItemPopoverPage } from '../pages/new-item-popover/new-item-popover';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';

import { NavController } from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    SetUpPage,
    BlankPage,
    LoginPage,
    SignupPage,
    NavigationPage,
    SetNavigationPage,
    SetNavContainerPage,
    SettingsPage,
    NewItemPopoverPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SetUpPage,
    BlankPage,
    LoginPage,
    SignupPage,
    NavigationPage,
    SetNavigationPage,
    SetNavContainerPage,
    SettingsPage,
    NewItemPopoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider
  ]
})
export class AppModule {}
