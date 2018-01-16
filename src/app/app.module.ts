import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { TabsPage } from '../pages/tabs/tabs';
import { ReservasPage } from '../pages/reservas/reservas';
import { EventosPage } from '../pages/eventos/eventos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp
    //TabsPage,
    //MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    //TabsPage,
    //MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
