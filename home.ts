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

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Good Job',
      subTitle: 'You just made the world a greener place!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  pointsval() {
    this.val = this.val + 1;
    this.presentAlert();
  }

}
