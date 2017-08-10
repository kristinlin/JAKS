import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})

export class BarcodePage {
  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {
  }

  options: BarcodeScannerOptions;
  results: {};

  async scanBarcode(){

    this.options = {
      prompt: 'Scan a barcode to see the result!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }
}
