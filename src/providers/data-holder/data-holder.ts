import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class DataHolderProvider {

  dateSelected: string;
  zonasSelected: Array<any>;

  constructor(public http: HttpClient,
              //private nativeStorage: NativeStorage
            ) {
    console.log('Hello DataHolderProvider Provider');
    
  }

  getDateSelected(){
    /*this.dateSelected = this.nativeStorage.getItem('dateSelected')
      .then(
        data => console.log(data),
        error => console.error(error)
      );*/
    return this.dateSelected
  }
  setDateSelected(newDate){
    /*this.nativeStorage.setItem('dateSelected', {date: newDate})
    .then(() => {
      alert('Stored item!');
      console.log('Stored item!')
    },
      error => console.error('Error storing item', error)
    );*/
    this.dateSelected = newDate;
  }

  getZonasSelected(){return this.zonasSelected}
  setZonasSelected(zonas){this.zonasSelected = zonas}

}
