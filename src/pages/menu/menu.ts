import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';

export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'TabsPage';
  //activePage: any;

  pages: PageInterface[] = [
    {title: 'Reservas', pageName: 'TabsPage', tabComponent: 'ReservasPage', index: 0, icon: 'clipboard'},
    {title: 'Eventos', pageName: 'TabsPage', tabComponent: 'EventosPage', index: 1, icon: 'calendar'},
    {title: 'Mis reservas', pageName: 'MisreservasPage', icon: 'list'},
    {title: 'Mi perfil', pageName: 'MiperfilPage', icon: 'contact'},
    {title: 'Salir', pageName: 'LogoutPage', icon: 'log-out'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.activePage = null;
  }

  openPage(page: PageInterface){
    let params = {};

    if(page.index){
      params = {tabIndex: page.index};
    }
    
    if(this.nav.getActiveChildNav() && page.index != undefined){ //getActiveChildNav() sera deprecado, usar getActiveChildNavs() en su lugar
    
      this.nav.getActiveChildNav().select(page.index);
    } else{
      this.nav.setRoot(page.pageName, params);
    }

  }

  /*
  checkActive(page: PageInterface){
    return page == this.activePage;
  }
  */
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return ;
  }

}
