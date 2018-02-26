import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController , Tabs } from 'ionic-angular';
//proveedores de servicios
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { DataHolderProvider } from '../../providers/data-holder/data-holder';

//Para abrir el modal
import { ModalController } from 'ionic-angular';

import { DetalleeventoPage } from '../detalleevento/detalleevento';

//Para hacer Social Sharing nativo
import { SocialSharing } from '@ionic-native/social-sharing';

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class EventosPage {
  tab: Tabs;
  dateSelected: string;
  public eventos: Array<any> = [];
  
  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public fbdbprovider: FirebaseDbProvider,
              private sharing: SocialSharing,
              public dataHolderProvider: DataHolderProvider,
              public toastCtrl: ToastController,
              //private nav: Nav
            ) {
    this.eventos = this.fbdbprovider.getEventos();
    this.tab = this.navCtrl.parent;    
    this.dateSelected = this.dataHolderProvider.getDateSelected();        
  }

  presentModal(evento) {
    let modal = this.modalCtrl.create(DetalleeventoPage, { data: evento});
    modal.present();
    /*modal.onDidDismiss(data => {
      this.invitedList = data;
    })*/
  }

  shareVia(evento){
    this.sharing.share(evento.detalles, evento.name, evento.imagen, null).then(()=>{ //el campo null es para una URL
      //alert("Mensaje enviado!");
      //this.presentToast("El evento fue compartido.");
    }).catch((error)=>{
      this.presentToast(error);
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: this.config.toast_duration
    });
    toast.present();
  }

  goToTab(n){
    this.tab.select(n);
  }

  showEvent(evento){
    //this.goToTab(0)
    this.navCtrl.push('ReservasPage', {fecha: evento.fecha});
  }

}
