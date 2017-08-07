import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {

  constructor(public navCtrl: NavController) {
  }
//  this.barcodeScanner.scan().then((barcodeData) => { //,private barcodeScanner: BarcodeScanner
   // Success! Barcode data is here
//  }, (err) => {
      // An error occurred
//  });
}
