import { Component } from '@angular/core';

import { EventosPage } from '../eventos/eventos';
import { ReservasPage } from '../reservas/reservas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReservasPage;
  tab2Root = EventosPage;

  constructor() {

  }
}
