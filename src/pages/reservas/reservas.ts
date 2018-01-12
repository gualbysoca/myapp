import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  items: any = [];
  itemExpandHeight: number;

  zonas: Array<any> = [];
  mesas: Array<any> = [];

  private appName: string;

  constructor(@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig, public navCtrl: NavController, public navParams: NavParams) {
    this.itemExpandHeight = config.itemExpandHeight;
    this.zonas = config.zonas;
    this.mesas = Array.from("config.mesas");
    console.log(this.zonas.toString());
    
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

}
