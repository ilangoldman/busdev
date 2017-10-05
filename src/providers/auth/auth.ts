import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform, LoadingController } from 'ionic-angular';

import { UserProvider } from '../user/user';

@Injectable()
export class AuthProvider {

  constructor(
    private loadingCtrl: LoadingController,
    public user: UserProvider) {
    console.log('Hello AuthProvider Provider');
  }

  loginWithFacebook(): Promise<any> {
    const loading = this.loadingCtrl.create({
        content: 'Loging in...'
    });
    loading.present();

    return new Promise((resolve, reject) => {
      this.user.login('Ilan Goldman',true)
        .then((success) => {
          loading.dismiss();
          resolve();
        }).catch((error) => {
          loading.dismiss();
          reject(error);
        })
      });

        // this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        //     .then((success) => {
        //         loading.dismiss();
        //         resolve();
        //     }).catch((error) => {
        //         loading.dismiss();
        //         reject(error.message);
        //     });
        // });
  }

  logoutUser(): Promise<any> {
    const loading = this.loadingCtrl.create({
        content: 'Loging out...'
    });
    loading.present();

    return new Promise((resolve, reject) => {
      this.user.login('Ilan Goldman',true)
        .then((success) => {
          loading.dismiss();
          resolve();
        }).catch((error) => {
          loading.dismiss();
          reject(error);
        })
      });


    //     this.afAuth.auth.signOut()
    //         .then((success) => {
    //             loading.dismiss();
    //             resolve();
    //         }).catch((error) => {
    //             loading.dismiss();
    //             reject(error.message);
    //         });
    // });
  }

  loginEmail(email: string, pwd: string): Promise<any> {
    const loading = this.loadingCtrl.create({
        content: 'Loging in...'
    });
    loading.present();

    return new Promise((resolve, reject) => {
      this.user.loginEmail(email,pwd)
        .then((success) => {
          loading.dismiss();
          resolve();
        }).catch((error) => {
          loading.dismiss();
          reject(error);
        })
      });

    //     this.afAuth.auth.signInWithEmailAndPassword(email, pwd)
    //         .then((success) => {
    //             loading.dismiss();
    //             resolve();
    //         }).catch((error) => {
    //             loading.dismiss();
    //             reject(error);
    //         });
    // });
  }

}
