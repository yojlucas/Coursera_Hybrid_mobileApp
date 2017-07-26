import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { HowitworksPage } from '../pages/howitworks/howitworks';
import { SellPage } from '../pages/sell/sell';
import { ViewallPage } from '../pages/viewall/viewall';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ContactPage } from '../pages/contact/contact';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HowitworksPage, 
    ListPage,
    SellPage, 
    ViewallPage,
    FavoritesPage,
    ContactPage,
    ItemdetailPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HowitworksPage,
    ListPage,
    SellPage,  
    ViewallPage,
    FavoritesPage,
    ContactPage,
    ItemdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
