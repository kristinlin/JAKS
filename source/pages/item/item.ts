import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
	
	itemTitle : string = '';

	constructor(	
				public navCtrl: NavController, 
				private alertCtrl: AlertController, 
				private navParams : NavParams, 
				private backand: BackandService) {
		this.itemTitle = navParams.get('title');
		this.initialize();
	}

	initialize() {
		this.backand.object.getOne('items', 183) 
		.then(res => {
			console.log(res.data);
		}) 
		.catch(err => {
			console.log(err);
		});
		
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
