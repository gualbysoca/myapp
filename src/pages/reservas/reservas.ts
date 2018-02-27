import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, MenuController } from 'ionic-angular';

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';

import { ImageViewerController } from 'ionic-img-viewer';

//proveedores de servicios
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { DataHolderProvider } from '../../providers/data-holder/data-holder';

//Para conexion a la BD de Firebase
//import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})

export class ReservasPage {
  _imageViewerCtrl: ImageViewerController;

  //eventos: FirebaseListObservable<any[]>;

  itemExpandHeight: number;
  zonas: Array<any> = [];
  fechas: Array<any> = [];
  eventos: Array<any> = [];
  dateSelected: string;

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig, 
              public fbdbprovider: FirebaseDbProvider,
              public dataHolderProvider: DataHolderProvider,
              public navCtrl: NavController,
              public navParams: NavParams, 
              private alertCtrl: AlertController, 
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public imageViewerCtrl: ImageViewerController,
              public menuCtrl: MenuController) {
    this.itemExpandHeight = this.config.itemExpandHeight;
    //this.zonas = this.config.zonas;
    //this.fechas = this.config.fechas;
    this.eventos = this.fbdbprovider.getEventos();  //habilitar esto luego
    //console.log(this.fbdbprovider.getEventos());
    menuCtrl.enable(true);
    this._imageViewerCtrl = imageViewerCtrl;
    //this.dateSelected = this.dataHolderProvider.getDateSelected();
    //this.zonas = this.dataHolderProvider.getZonasSelected();
    //this.zonas = this.navParams.get('zonas');
    this.dateSelected = this.navParams.get('fecha');
  }

  ionViewDidLoad() {
    //this.dateSelected = this.navParams.get('fecha');
    //this.dateSelected = this.dataHolderProvider.getDateSelected();
    //alert(this.dateSelected);
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    //setTimeout(() => imageViewer.dismiss(), 1000);
    //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
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

  updateZoneList(evento){
    console.log('hace un update de las zonas');
    //this.dateSelected = this.dataHolderProvider.getDateSelected();
    //alert(this.dateSelected);

    //this.dataHolderProvider.setDateSelected(evento.fecha);
    //this.dataHolderProvider.setZonasSelected(evento.zonas);
    this.dateSelected = evento.fecha;
    this.zonas = evento.zonas;
  }

  isItSelected(evento){
    if(this.dateSelected!= undefined && this.dateSelected==evento.fecha){
      this.updateZoneList(evento)
      return true
    }
    else
      return false
  }


}
