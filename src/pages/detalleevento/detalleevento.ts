import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, ActionSheetController, ToastController } from 'ionic-angular';
//Para hacer Social Sharing nativo
import { SocialSharing } from '@ionic-native/social-sharing';

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../assets/config/app-config';

/**
 * Generated class for the DetalleeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleevento',
  templateUrl: 'detalleevento.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class DetalleeventoPage {
  private evento;
  menuButtons: any = [
        {
          text: 'Reservar',
          icon: !this.platform.is('ios') ? 'clipboard' : null,
          handler: () => {
            this.showEvent(this.evento);
            console.log('Modificar clicked');
          }
        },
        {
          text: 'Compartir',
          icon: !this.platform.is('ios') ? 'md-share' : null,
          handler: () => {
            this.shareVia(this.evento);
            console.log('Invitar amigos clicked');
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
      ];

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,
              public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private view: ViewController,
              private sharing: SocialSharing,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController) {
    this.evento = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleeventoPage');
  }

  closeModal(){
    this.view.dismiss();
  }

  openMenu() {
    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Evento',
      cssClass: 'action-sheets-basic-page',
      buttons: this.menuButtons
    });
    actionSheet.present();
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

  showEvent(evento){
    this.navCtrl.push('ReservasPage', {fecha: evento.fecha});
  }

}
