import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SearchPage } from '../search/search';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})

export class BarcodePage {

  barcode_output: any;
  item_name = "Hello joe";
  barcode_api = "http:\/\/api.upcdatabase.org/json/bf2a7fdcdf1ea5ca41f150997431ab0b/";
  //searching_string = "";
  full_url: any;
  string_parts: string[];

  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, public http:Http) {
  }

  itemtemp() {
    //getItems(this.combineWords);
    //this.navCtrl.push(SearchPage, {parts : this.combineWords()});
  }

  combineWords() {
    var combined = "";
    for (let word of this.string_parts) {
      combined += word;
      combined += ";";
    }
    combined = combined.slice(0, -1);
    //alert(combined);
    return combined;
  }

  async scanBarcode(){
    this.options = {
      prompt: 'Scan a barcode to see the result!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.item_name = await this.NumberToName();
    //{parts : this.combineWords()}
    
    
    //this.string_parts = await this.processString(test);
    //await this.itemtemp()
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
        //alert("if is true, " + this.item_name);
        this.string_parts = this.processString(this.item_name);
        //alert("i got to this part 1");
        this.navCtrl.push(SearchPage, {parts: this.combineWords()});
        //alert("pushed?")
        return this.item_name;
      }
      else {
        this.item_name = data.itemname;
        //alert("if is false, " + this.item_name);
        this.string_parts = this.processString(this.item_name);
        //alert("i got to this part 2");
        this.navCtrl.push(SearchPage, {parts: this.combineWords()});
        //alert("pushed?");
        return this.item_name;
      }
    })
    return "hai"
  }

  processString(name) {
    
    var searching_string = name.toLowerCase();
    searching_string = searching_string.replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    var parts = searching_string.split(" ");
    for (let entry of parts) {
      if (entry.length <= 2) {
        var index = parts.indexOf(entry);
        parts.splice(index, 1);
      }
    }
    //alert("processed: " + parts);
    return parts;
  }
}
