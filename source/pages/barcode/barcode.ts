import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})

export class BarcodePage {

  barcode_output: any;
  item_name = "Hello yall";
  barcode_api = "http:\/\/api.upcdatabase.org/json/bf2a7fdcdf1ea5ca41f150997431ab0b/";
  searching_string = "";
  full_url: any;
  string_parts: string[];

  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, public http:Http) {
  }

  async scanBarcode(){

    this.options = {
      prompt: 'Scan a barcode to see the result!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.NumberToName();
    this.processString();
  }

  NumberToName() {
    this.full_url = this.barcode_api.concat(this.results["text"]);
    this.barcode_output = this.http.get(this.full_url);
    this.barcode_output
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
      if(data.itemname == ""){
        this.item_name = data.description
      }
      else {
        this.item_name = data.itemname;
      }

    })
  }

  processString() {
    alert("Processing Started With: " + this.item_name)
    this.searching_string = this.item_name.toLowerCase();
    this.searching_string = this.searching_string.replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    this.string_parts = this.searching_string.split(" ");
    for (let entry of this.string_parts) {
      if (entry.length <= 2) {
        var index = this.string_parts.indexOf(entry);
        this.string_parts.splice(index, 1);
      }
    }
    alert(this.string_parts);
    }
}
