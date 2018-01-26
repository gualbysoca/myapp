import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasPage } from './reservas';
import { ExpandableComponent } from '../../components/expandable/expandable';



@NgModule({
  declarations: [
    ReservasPage,
    ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(ReservasPage),
  ],
  entryComponents: [
    ExpandableComponent
  ],
})
export class ReservasPageModule {}
