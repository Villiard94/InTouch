import {Component} from '@angular/core';
//import {NavController} from 'ionic-angular';
import {LoadingController} from "ionic-angular";
import {NavController} from "ionic-angular";
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(private loader: LoadingController, private navCtrl: NavController) {
    
  }

  signIn() {
      let l = this.loader.create({
        content: 'Signing in...',
        duration: 3000,
      });

      l.present();

      this.navCtrl.push(TabsPage);
  }
}
