import { Component, Inject } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ApplicationConfig, MY_CONFIG_TOKEN, MY_CONFIG } from '../../assets/config/app-config';

/**
 * Generated class for the DetallereservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallereserva',
  templateUrl: 'detallereserva.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class DetallereservaPage {
  res;
  mensajes: Array<any> = [];
  menuButtons: any = {
    reservada:{
      buttons: [
        {
          text: 'Cancelar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Modificar',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('Modificar clicked');
          }
        },
        {
          text: 'Invitar amigos',
          icon: !this.platform.is('ios') ? 'person-add' : null,
          handler: () => {
            console.log('Invitar amigos clicked');
          }
        },
        {
          text: 'Publicar en Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Publicar en Facebook clicked');
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    },
    preaprobada:{
      buttons: [
        {
          text: 'Cancelar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Modificar',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('Modificar clicked');
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }
  };

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.res = navParams.data.res;
    this.mensajes = config.mensajes;
  }

  //pendiente, preaprobada, pagada, reservada, cancelada, rechazada

  /*ionViewDidLoad(){
    console.log(this.menuButtons.preaprobada.mensaje);
  }*/

  whichIcon(estado){
    switch(estado) { 
      case 'pendiente':{
        return 'clock';
      }
      case 'preaprobada':{
        return 'thumbs-up';
      }
      case 'pagada':{
        return 'cash';
      }
      case 'reservada':{
        return 'thumbs-up';
      }
      case 'cancelada':{
        return 'trash';
      }
      case 'rechazada':{
        return 'alert';
      }
      case 'caducada':{
        return 'information-circle';
      }
      default:
        return '';
    } 
  }

  whichColor(estado){
    switch(estado) { 
      case 'pendiente':{
        return 'primary';
      }
      case 'preaprobada':{
        return 'orange';
      }
      case 'pagada':{
        return 'primary';
      }
      case 'reservada':{
        return 'success';
      }
      case 'cancelada':{
        return 'danger';
      }
      case 'rechazada':{
        return 'alert';
      }
      case 'caducada':{
        return 'primary';
      }
      default:
        return '#000000';
    } 
  }

  openMenu(estado) {
    console.log(estado);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Reserva',
      cssClass: 'action-sheets-basic-page',
      buttons: estado == 'reservada' ? this.menuButtons.reservada.buttons : this.menuButtons.preaprobada.buttons
    });
    actionSheet.present();
  }

}
