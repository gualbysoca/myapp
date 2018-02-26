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

//Para hacer login Web con Facebook y Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Para hacer login nativo con Facebook y Firebase
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import { SearchListPage } from '../pages/search-list/search-list';
import { DetalleeventoPage } from '../pages/detalleevento/detalleevento';

//Para generar codigos QR
import { NgxQRCodeModule } from 'ngx-qrcode2';

//Para hacer Social Sharing nativo
import { SocialSharing } from '@ionic-native/social-sharing';

//proveedores de servicios
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { DataHolderProvider } from '../providers/data-holder/data-holder';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//Paras el transcode a Base64
import { Base64 } from '@ionic-native/base64';

//Para persistencia de datos
import { NativeStorage } from '@ionic-native/native-storage'; //No en uso

//Para conectar con la BD de Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';








export const firebaseConfig = {
  apiKey: "AIzaSyDv2VM3z7d0oDk0co4JDYw__43bd0NmC3c",
  authDomain: "cortijoapp.firebaseapp.com",
  databaseURL: "https://cortijoapp.firebaseio.com",
  projectId: "cortijoapp",
  storageBucket: "cortijoapp.appspot.com",
  messagingSenderId: "28265873428"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    DetallereservaPage,
    //TabsPage,
    //MenuPage
    SearchListPage,
    DetalleeventoPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetallereservaPage,
    //TabsPage,
    //MenuPage
    SearchListPage,
    DetalleeventoPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    Facebook,
    SocialSharing,
    Base64,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    DataHolderProvider
  ]
})
export class AppModule {}
