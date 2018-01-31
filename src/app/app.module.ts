import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetallereservaPage } from '../pages/detallereserva/detallereserva';

//Para haceer el Zoom de la imagen del croquis
import { IonicImageViewerModule } from 'ionic-img-viewer';
//Para hacer uso nativo de la camara
import { Camera } from '@ionic-native/camera';
//import { NativeStorage } from '@ionic-native/native-storage';
//Para hacer login con Facebook y Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


const firebase = {
  apiKey: "AIzaSyDv2VM3z7d0oDk0co4JDYw__43bd0NmC3c",
  authDomain: "cortijoapp.firebaseapp.com",
  databaseURL: "https://cortijoapp.firebaseio.com",
  projectId: "cortijoapp",
  storageBucket: "cortijoapp.appspot.com",
  messagingSenderId: "28265873428"
};

@NgModule({
  declarations: [
    MyApp,
    DetallereservaPage
    //TabsPage,
    //MenuPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetallereservaPage
    //TabsPage,
    //MenuPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    //NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
