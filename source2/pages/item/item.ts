import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
	
	item;
	itemTitle : string = '';
	itemClass : string = '';
	itemHowTo : string = '';
	itemPoints : number = 0;

	constructor(	
				public navCtrl: NavController, 
				private alertCtrl: AlertController, 
				private navParams : NavParams, 
				private backand: BackandService) {
		// index : number;
		// index = navParams.get('title');
		this.initialize(navParams.get('title'));
		
	}

	initialize(index: number) {
		
		this.backand.object.getOne('items', index) 
		.then(res => {
			console.log(res.data);
			this.item = res.data;
			this.itemTitle = this.item.oNAME;
			this.itemClass = this.item.class;
			console.log(this.itemClass);
			this.itemHowTo = this.item.howTO;
			this.itemPoints = this.item.points;
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
