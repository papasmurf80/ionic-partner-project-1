import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
user: any;

  constructor(public navCtrl: NavController, private app: App) {

  }
  
  login(user) {
    console.log("login");
  this.goHome();
  }

  goHome(){
    this.app.getRootNav().setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }

  

}
