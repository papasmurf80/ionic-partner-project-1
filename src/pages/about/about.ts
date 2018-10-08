import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  static goHome: any;

  constructor(public navCtrl: NavController, private app: App) {

  }
  goHome() {
    this.app.getRootNav().setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }
  

}
