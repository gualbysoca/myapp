import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';
//import { Facebook } from '@ionic-native/facebook';

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

  constructor(private navParams: NavParams, 
              private view: ViewController,
              public alertCtrl: AlertController
              //public facebook: Facebook
            ){
    this.invitedList = this.navParams.get('data');
    console.log(this.invitedList);
  }

  createCode(){
    this.createdCode = "mi cadena de prueba";
  }

  closeModal(){
    this.view.dismiss(this.invitedList);
  }

  presentConfirm(invited, reservation) {
    this.createCode();
    let alert = this.alertCtrl.create({
      title: 'Enviar invitación?',
      message: '<ion-card><ion-card-content><ngx-qrcode [qrc-value]='+this.createdCode+'></ngx-qrcode>'+this.createdCode+'</ion-card-content></ion-card>',
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
            
          }
        }
      ]
    });
    alert.present();
  }


}
