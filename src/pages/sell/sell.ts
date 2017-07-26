import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SellPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

}
