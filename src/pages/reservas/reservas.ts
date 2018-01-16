import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, MenuController } from 'ionic-angular';


// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';



/**
 * Generated class for the ReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})

export class ReservasPage {

  itemExpandHeight: number;
  zonas: Array<any> = [];

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertCtrl: AlertController, 
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) {
    this.itemExpandHeight = config.itemExpandHeight;
    this.zonas = config.zonas;
    menuCtrl.enable(true);
    
  }


  expandItem(item){
    //console.log("Entra...");
    
    this.zonas.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });

  }

  presentConfirm(zona, mesa) {
    let alert = this.alertCtrl.create({
      title: 'Zona '+zona.nombre,
      message: 'Mesa: '+mesa+'<br>Fecha: <br>Costo: Bs.'+zona.costo+' (en consumo)<br>Capacidad: '+zona.capmesa+'<hr>Nota: Toda reserva debe ser previamente cancelada.<hr>Desea realizar la reserva?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'RESERVAR',
          handler: () => {
            console.log('Buy clicked');
            this.presentLoading();
            
          }
        }
      ]
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 3000
    });
    loader.present();
    setTimeout(() => {
      this.presentToast("La solicitud de reserva fue enviada!\nPara completar tu reserva e invitar amigos dirigete a la sección \"Mis reservas\" en el menú principal.") 
      //this.nav.push(Page2);
    }, 3000);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'middle',
      showCloseButton: true
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  openMenu() {
    this.menuCtrl.open();
  }

}
