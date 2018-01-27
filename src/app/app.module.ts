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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
