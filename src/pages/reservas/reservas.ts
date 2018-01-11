import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class ReservasPage {


  items: any = [];
  itemExpandHeight: number = 100;

  zonas: Array<any> = [
    {
      nombre: "VIP Lounge",
      icono: "ribbon",
      color: "grey",
      disponibilidad: "sold-out",
      expanded: false
    },
    {
      nombre: "VIP Mesa",
      icono: "star",
      color: "grey",
      disponibilidad: "2",
      expanded: false
    },
    {
      nombre: "Camarotes",
      icono: "glasses",
      color: "grey",
      disponibilidad: "7",
      expanded: false
    },
    {
      nombre: "Patio",
      icono: "beer",
      color: "grey",
      disponibilidad: "1",
      expanded: false
    },
    {
      nombre: "Jardin",
      icono: "leaf",
      color: "grey",
      disponibilidad: "10",
      expanded: false
    },
    {
      nombre: "Internacional Interior",
      icono: "log-in",
      color: "grey",
      disponibilidad: "sold-out",
      expanded: false
    },
    {
      nombre: "Terraza",
      icono: "cube",
      color: "grey",
      disponibilidad: "sold-out",
      expanded: false
    },
    {
      nombre: "Zona Deportiva",
      icono: "football",
      color: "grey",
      disponibilidad: "sold-out",
      expanded: false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false}
    ];
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
