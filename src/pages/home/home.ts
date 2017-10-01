import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //user: firebase.User;
  isAdmin: boolean = false;

  cardsBD = [
    {
      img: "assets/img/app/servicos.jpg",
      title: "Serviços",
      subtitle: "41 opcoes"
    },
    {
      img: "assets/img/app/calendario.jpg",
      title: "Agendar",
      subtitle: ""
    },
    {
      img: "assets/img/app/sobrenos.jpg",
      title: "Sobre Nos",
      subtitle: ""
    },
  ];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      //public auth: AuthProvider
  ) {
      //this.user = this.auth.getUser();
      //if (this.user.displayName == 'Ilan Goldman') 
      this.isAdmin = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout() {
      // this.auth.logoutUser();
      // this.navCtrl.setRoot(HomePage);
  }


}
