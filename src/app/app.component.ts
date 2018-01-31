import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//import { NativeStorage } from '@ionic-native/native-storage';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { ReservasPage } from '../pages/reservas/reservas';
//import { LoginPage } from '../pages/login/login';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';
  //activePage: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              //public nativeStorage: NativeStorage,
              splashScreen: SplashScreen) {

    platform.ready().then(() => {
      /*
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      
      nativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        this.nav.push(ReservasPage);
        splashScreen.hide();
      }, function (error) {
        console.log("se va a login!")
        //we don't have the user data so we will ask him to log in
        this.nav.push(LoginPage);
        splashScreen.hide();
      });*/
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    //this.activePage = null;
  }
  /*
  openPage(page){
    console.log("ingresa..");
    this.nav.push(page);
    //this.nav.setRoot(page);
    //this.activePage = page;
  }

  
  checkActive(page){
    return page == this.activePage;
  }
  */
}
