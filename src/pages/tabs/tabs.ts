import { Component } from '@angular/core';

import { IdentifierPage } from '../identifier/identifier';
import { BarcodePage } from '../barcode/barcode';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IdentifierPage;
  tab3Root = BarcodePage;
  tab4Root = SearchPage;

  constructor() {

  }
}
