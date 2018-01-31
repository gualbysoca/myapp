import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
//import { Facebook } from '@ionic-native/facebook';
//import { NativeStorage } from '@ionic-native/native-storage';
//import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController,
              private afauth: AngularFireAuth, 
              //public nativeStorage: NativeStorage,
              public navParams: NavParams) {
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    this.doFbLogout();
  }

  doFbLogout(){
		
		this.afauth.auth.signOut()
		.then((result) => {
			this.navCtrl.setRoot('LoginPage');
		},(error) => {
			console.log(error);
		});
	}

}
