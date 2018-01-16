import { Component } from '@angular/core';

//import { EventosPage } from '../eventos/eventos';
//import { ReservasPage } from '../reservas/reservas';
import { NavParams, IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({ 
  selector: 'page-tabs',
  templateUrl: 'tabs.html'})

export class TabsPage {

  tab1Root = 'ReservasPage';
  tab2Root = 'EventosPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
