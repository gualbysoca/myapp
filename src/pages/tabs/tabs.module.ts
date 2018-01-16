import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
//import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class ReservasPageModule {}