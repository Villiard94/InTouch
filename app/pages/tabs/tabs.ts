import {Component} from '@angular/core';
import {FavoritesPage} from '../favorites/favorites';
import {RoutePage} from '../route/route';
import {AccountPage} from '../account/account';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = FavoritesPage;
    this.tab2Root = RoutePage;
    this.tab3Root = AccountPage;
  }
}
