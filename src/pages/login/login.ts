import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
user: any;

  constructor(public navCtrl: NavController) {

  }
  
  login(user) {
    console.log("login");
      AboutPage.goHome();  
    // return null
  }

}
