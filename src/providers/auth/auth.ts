import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Platform, LoadingController } from 'ionic-angular';

import { UserProvider } from '../user/user';

@Injectable()
export class AuthProvider {

  constructor(
    private loadingCtrl: LoadingController,
    public user: UserProvider,
    private http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  loginWithFacebook(): Promise<any> {
    const loading = this.loadingCtrl.create({
        content: 'Loging in...'
    });
    loading.present();    

    return new Promise((resolve, reject) => {
      this.user.loginEmail('ilan@goldman.com', 'ilan')
        .then((success) => {
          loading.dismiss();
          resolve();
        }).catch((error) => {
          loading.dismiss();
          reject(error);
        })
      });
  }

  loginEmail(email: string, pwd: string): Promise<any> {
    const loading = this.loadingCtrl.create({
        content: 'Loging in...'
    });
    loading.present();

    var params = "email="+email+"&pwd="+pwd;

    return this.http.get("http://localhost/ilangoldman/Sites/login.php?"+params)
        .toPromise()
        .then(res => {
          var userJSON = res.json()[0];
          console.log(userJSON);
          if (userJSON != "") 
            this.user.setUserInfo(userJSON.id, userJSON.name, email, userJSON.image, userJSON.master);
          loading.dismiss();
        }).catch((error) => { 
          loading.dismiss();
        });
  }

  // signUp(email: string, name: string, pwd:string): Promise<any> {
  //   const loading = this.loadingCtrl.create({
  //     content: 'Signing up...'
  //   });
  //   loading.present();

  //   var success = false;
  //   var error:any;

  //   var params = "email=" + email + "&pwd=" + pwd + "&name=" + name;
  //   return this.http.get("http://localhost/ilangoldman/Sites/signup.php?" + params)
  //     .toPromise()
  //     .then(res => {
  //       console.log("ok1");
  //       loading.dismiss();
  //     }).catch((error) => {
  //       console.log("erro");        
  //       loading.dismiss();
  //     });

  // }

}
