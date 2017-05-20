import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { FacebookAuth, User, AuthLoginResult } from '@ionic/cloud-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDetails: AuthLoginResult;

  constructor(private facebook: FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(): Promise<void> {

    console.log('Yep.. Being Invoked...')

    try {
      this.loginDetails = await this.facebook.login();
      console.log(this.loginDetails)
    } catch(err) {
      console.log('error');
      console.log(err);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
