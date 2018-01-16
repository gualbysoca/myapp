import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';
  //activePage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
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
