import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the MiperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miperfil',
  templateUrl: 'miperfil.html',
})
export class MiperfilPage {
  userData: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad miperfilPage');
    this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
      this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    });
  }

}
