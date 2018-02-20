import { Component, Inject  } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { NativeStorage } from '@ionic-native/native-storage';
import { AngularFireAuth } from 'angularfire2/auth';

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';


@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class LogoutPage {

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public navCtrl: NavController,
              private afauth: AngularFireAuth, 
              //public nativeStorage: NativeStorage,
              public facebook: Facebook,
              public toastCtrl: ToastController,
              public navParams: NavParams) {
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    //this.webLogout();
    this.nativeLogout();
  }

  webLogout(){
		this.afauth.auth.signOut()
		.then((result) => {
			this.navCtrl.setRoot('LoginPage');
		},(error) => {
			console.log(error);
		});
  }
  
  nativeLogout(){
    this.facebook.logout().then((resp) => {
      //alert(JSON.stringify(resp));
      this.presentToast(this.config.logout_success_msg);
      this.navCtrl.setRoot('LoginPage');
    }, (error) =>{
      //alert(JSON.stringify(error));
      this.presentToast(this.config.logout_error_msg + " " + error);
      this.navCtrl.setRoot('MenuPage');
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: this.config.toast_duration
    });
    toast.present();
  }

}
