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
	itemHowTo : string = '';
	itemPoints : number = 0;
	itemCategory : string = '';

	constructor(
				public navCtrl: NavController,
				private alertCtrl: AlertController,
				private navParams : NavParams,
				private backand: BackandService) {
		    let index : number = 0;
		    index = navParams.get('title');
		this.initialize(navParams.get('title'));
	}
/*
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Good Job',
      subTitle: 'You just made the world a greener place!',
      buttons: ['Dismiss']
    });
    alert.present();

  }



  pointsval() {
  //  this.homePage.val = this.homePage.val + 1;
    this.presentAlert();
  }

*/

	initialize(index: number) {

		let itemClass : number = 0;

		this.backand.object.getOne('items', index)
		.then(res => {
			console.log(res.data);
			this.item = res.data;
			this.itemTitle = this.item.oNAME;
			itemClass = this.item.class;
			console.log(itemClass);
			this.itemHowTo = this.item.howTO;
			this.itemPoints = this.item.points;


			this.backand.object.getOne('categories',itemClass)
			.then(res => {
				console.log(res.data);
				this.itemCategory = res.data.cNAME;
			})
			.catch(err => {
				console.log(err);
			});

		})
		.catch(err => {
			console.log(err);
		});
		/*
		this.backand.object.getOne('categories',this.itemClass)
		.then(res => {
			console.log('HELLO BITCHES');
			console.log(res.data);
			console.log(res.data[this.itemClass-2]);
		})
		.catch(err => {
			console.log(err);
		});
		*/
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
