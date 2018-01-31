import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { Facebook } from '@ionic-native/facebook';
//import { NativeStorage } from '@ionic-native/native-storage';

// Import the config-related things
//import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';

//importamos esto para hacer el facebook login con firebase
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class LoginPage {
  //FB_APP_ID: number;

  constructor(//@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public navCtrl: NavController, 
              //public fb: Facebook,
              //public nativeStorage: NativeStorage,
              private afauth: AngularFireAuth,
              public navParams: NavParams) {
    //this.FB_APP_ID = config.FB_APP_ID;
    //this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  doFbLogin(){
    /*let permissions = new Array<string>();
    let nav = this.navCtrl;
	  let env = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    this.fb.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      env.fb.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        env.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          nav.push(ReservasPage);
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });*/
    console.log("Regresa de Facebook exitoso");
    /*
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider)
    .then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        console.log("Entro con facebook...");
        alert(JSON.stringify(result));
        this.navCtrl.push('MenuPage');
      }).catch(function(error){
        console.log("Ocurrio un error con facebook...");
        alert(JSON.stringify(error));
      });
    })
   */

    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => {
      console.log(res);
      this.navCtrl.setRoot('MenuPage');
    })
     
  }

}
