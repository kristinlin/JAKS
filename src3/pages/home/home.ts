import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  val = 0;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  apresentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Good Job',
      subTitle: 'You powered a TV for 3 hours!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ppresentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Good Job',
      subTitle: 'You just powered a 60-watt lightbulb for 3 hours!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  gpresentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Good Job',
      subTitle: 'You just powered a computer for 25 minutes!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  gpointsval() {
    this.val = this.val + 1;
    this.gpresentAlert();
  }

  ppointsval() {
    this.val = this.val + 1;
    this.ppresentAlert();
  }

  apointsval() {
    this.val = this.val + 1;
    this.apresentAlert();
  }

}
