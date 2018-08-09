import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slide } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 class myPage {
   @ViewChild(Slides) slides: Slide;

   goToSlide() {
    this.slides.slideTo(2, 500)
   }
 }

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

  goToPageTabs() {
    this.navCtrl.push(TabsPage)
  }

}
