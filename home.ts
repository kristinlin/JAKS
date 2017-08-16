import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	val : number = 0;

  constructor(	public navCtrl: NavController, 
				private alertCtrl: AlertController, 
				private navParams : NavParams,
				private storage : Storage) {
  }
  
  update() {
	this.storage.get('points').then((data) => {
		if (data != null)
		{
			console.log(data);
			this.val += data;
		} 
	});
	
	this.storage.ready().then(() => {
		this.storage.set('points', 0);
	});
	
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
    // this.storage.set('points', this.storage.get('points') + 1);
	this.val += 1;
    this.gpresentAlert();
  }

  ppointsval() {
    // this.storage.set('points', this.storage.get('points') + 1);
	// val = this.storage.get('points');
	this.val += 1;
    this.ppresentAlert();
  }

  apointsval() {
    // this.storage.set('points', this.storage.get('points') + 1);
	// val = this.storage.get('points');
	this.val += 1;
    this.apresentAlert();
  }

}
