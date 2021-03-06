import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { HowitworksPage } from '../pages/howitworks/howitworks';
import { SellPage } from '../pages/sell/sell';
import { ViewallPage } from '../pages/viewall/viewall';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ContactPage } from '../pages/contact/contact';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage},
      { title: 'List', component: ListPage },
      { title: 'Howitworks', component: HowitworksPage },
      { title: 'Sell', component: SellPage },
      { title: 'Viewall', component: ViewallPage },
      { title: 'Favorites', component: FavoritesPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Itemdetail', component: ItemdetailPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
