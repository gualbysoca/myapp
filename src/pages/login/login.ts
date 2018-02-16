import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
//import { NativeStorage } from '@ionic-native/native-storage';

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';

//importamos esto para hacer el facebook login con firebase
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class LoginPage {
  //FB_APP_ID: number;

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public navCtrl: NavController, 
              private facebook: Facebook,
              public toastCtrl: ToastController,
              //public nativeStorage: NativeStorage,
              private afauth: AngularFireAuth,
              public navParams: NavParams) {
  }

  loginWithWebFB(){

    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => {
      //alert(res);
      this.presentToast(this.config.login_welcome_msg);
      console.log(res);
      this.navCtrl.setRoot('MenuPage');
    }).catch( (error) =>{
      console.log(JSON.stringify(error));
      this.presentToast(this.config.login_error_msg);
    });
    
     
  }

  login(){
    this.navCtrl.setRoot('MenuPage');
  }

  loginWithNativeFB(){
    this.facebook.login(['email']).then((res)=>{
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then((fs)=>{
        this.presentToast(this.config.login_welcome_msg);
        this.navCtrl.setRoot('MenuPage');
      }). catch((ferr)=>{
        console.log(JSON.stringify(ferr));
        this.presentToast(this.config.login_error_msg);
      })
    }).catch((error)=>{
      console.log(JSON.stringify(error));
      this.presentToast(this.config.login_error_msg);
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }
 
}
