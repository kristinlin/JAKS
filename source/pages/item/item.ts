import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Login',
    inputs: [
      {
        name: 'Item Number',
        placeholder: 'Item Number'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
      }
    ]
  });
  alert.present();
}

}
