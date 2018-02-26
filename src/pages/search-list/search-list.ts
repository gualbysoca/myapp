import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';
//import { Facebook } from '@ionic-native/facebook';

//generar codigos QR con qrcode
import QRCode from 'qrcode';

//Para hacer Social Sharing nativo
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-search-list',
  templateUrl: 'search-list.html',
})
export class SearchListPage {
  //public isSearchbarOpnened=false;
  //searchQuery: string = '';
  invitedList: Array<any> = [];
  qrData = null;
  createdCode = null;

  code = 'mi cadena de prueba';
  generated = '';

  constructor(private navParams: NavParams, 
              private view: ViewController,
              public alertCtrl: AlertController,
              private sharing: SocialSharing
              //public facebook: Facebook
            ){
    this.invitedList = this.navParams.get('data');
    console.log(this.invitedList);
  }

  createCode(){
    this.createdCode = "Este es un mensaje de prueba... pero el Samu me la pela!";
  }

  displayQrCode() {
    return this.generated !== '';
  }

  processQRCode() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }

  closeModal(){
    this.view.dismiss(this.invitedList);
  }

  presentConfirm(invited, reservation) {
    this.createCode();
    let alert = this.alertCtrl.create({
      title: 'Enviar invitación',
      message: 'Se enviará un código QR a su contacto. Esta acción no puede deshacerse.<br>Su cupo de invitados es:',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('CANCEL clicked');
          }
        },
        {
          text: 'ENVIAR',
          handler: () => {
            console.log('ENVIAR clicked');
            //this.presentLoading();
            this.processQRCode();
            this.shareVia();
            
          }
        }
      ]
    });
    alert.present();
  }

  shareVia(){
    this.sharing.share("Hola Mundo", "El subect", this.generated, null).then(()=>{
      alert("Mensaje enviado!");
    }).catch((error)=>{
      alert(error);
    })
  }


}
