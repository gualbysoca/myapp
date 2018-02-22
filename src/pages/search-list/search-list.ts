import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
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


  constructor(private navParams: NavParams, 
              private view: ViewController
              //public facebook: Facebook
            ){
    this.invitedList = this.navParams.get('data');
    console.log(this.invitedList);
  }


  closeModal(){
    this.view.dismiss(this.invitedList);
  }



}
