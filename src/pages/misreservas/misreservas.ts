import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallereservaPage } from '../detallereserva/detallereserva';

@IonicPage()
@Component({
  selector: 'page-misreservas',
  templateUrl: 'misreservas.html',
})
export class MisreservasPage {

  misReservas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.misReservas = [
      {
        id_cliente: 'gmm080883',
        fecha: '16/12/2017',
        zona: 'VIP Lounge',
        mesa: '1',
        costo: '700',
        capacidad: '15',
        estado: 'pendiente'//pendiente, preaprobada, pagada, reservada, cancelada, rechazada
      },
      {
        id_cliente: 'gmm080883',
        fecha: '14/08/2017',
        zona: 'Patio',
        mesa: '9',
        costo: '480',
        capacidad: '0',
        estado: 'preaprobada'
      },
      {
        id_cliente: 'gmm080883',
        fecha: '08/07/2017',
        zona: 'Internacional Interior',
        mesa: '8',
        costo: '250',
        capacidad: '0',
        estado: 'pagada'
      },
      {
        id_cliente: 'gmm080883',
        fecha: '08/07/2017',
        zona: 'Internacional Interior',
        mesa: '8',
        costo: '250',
        capacidad: '0',
        estado: 'reservada'
      },
      {
        id_cliente: 'gmm080883',
        fecha: '08/07/2017',
        zona: 'Internacional Interior',
        mesa: '8',
        costo: '250',
        capacidad: '0',
        estado: 'cancelada'
      },
      {
        id_cliente: 'gmm080883',
        fecha: '08/07/2017',
        zona: 'Internacional Interior',
        mesa: '8',
        costo: '250',
        capacidad: '0',
        estado: 'rechazada'
      },
      {
        id_cliente: 'gmm080883',
        fecha: '08/07/2017',
        zona: 'Internacional Interior',
        mesa: '8',
        costo: '250',
        capacidad: '0',
        estado: 'caducada'
      }
    ];
  }

  openReservationDetail(reservation){
    this.navCtrl.push(DetallereservaPage, {res: reservation});
  }

}
