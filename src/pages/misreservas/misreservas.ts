import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallereservaPage } from '../detallereserva/detallereserva';

//proveedores de servicios
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

@IonicPage()
@Component({
  selector: 'page-misreservas',
  templateUrl: 'misreservas.html',
})
export class MisreservasPage {

  misReservas = [];

  constructor(public navCtrl: NavController,
              public fbdbprovider: FirebaseDbProvider, 
              public navParams: NavParams) {
    this.misReservas = this.fbdbprovider.getReservas("un_id_cualquiera");
  }

  openReservationDetail(reservation){
    this.navCtrl.push(DetallereservaPage, {res: reservation});
  }

}
