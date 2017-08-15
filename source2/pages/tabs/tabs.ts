import { Component } from '@angular/core';

import { BarcodePage } from '../barcode/barcode';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = BarcodePage;

  constructor() {

  }
}
