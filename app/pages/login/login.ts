import {Component} from '@angular/core';
//import {NavController} from 'ionic-angular';
import {LoadingController} from "ionic-angular";
import {NavController} from "ionic-angular";
import {TabsPage} from '../tabs/tabs';
import {CacheService} from '../services/system/cache.service';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [CacheService]
})
export class LoginPage {

  public username: string
  public password: string

  constructor(private loader: LoadingController, private navCtrl: NavController, private cacheService:CacheService) {
      this.username = cacheService.Get<string>('lastloginusername');
  }

  signIn() {
      let l = this.loader.create({
        content: 'Signing in...',
        duration: 1000,
      });

      l.present();

      this.navCtrl.push(TabsPage);

      this.cacheService.Set('lastloginusername', this.username);
  }
}
