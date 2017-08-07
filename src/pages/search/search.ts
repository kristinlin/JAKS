import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchQuery: string = '';
  items;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
    'plastic bottle',
    'glass bottle',
    'water bottle',
    'pizza box',
    'plastic bottle',
    'glass bottle',
    'water bottle',
    'pizza box',
    'plastic bottle',
    'glass bottle',
    'water bottle',
    'pizza box',
    'plastic bottle',
    'glass bottle',
    'water bottle',
    'pizza box',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
