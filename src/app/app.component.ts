import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
export class AppComponent implements OnInit {
  res: string;
  constructor(private backand: BackandService) { }
  getList(): void {
    this.res = 'fetching objects...';
    this.backand.object.getList('users').then((res: any) => {
      this.res = `${res.data.length} objects fetched`;
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.backand.init({
      appName: 'jaksgreco',
      masterToken: '6c25d82e-f7df-4ddf-9264-2712c6364c43',
      userToken: '78c423ff-767f-11e7-9066-06bcf2b21c8c',
      runSocket: true,
      mobilePlatform: 'ionic'
    });
    this.getList();
  }
}





//backand.init({
//   appName: 'jaksgreco',
//   SignUpToken: '82140e16-6d17-4b7e-bbde-b9c130d0cec1',
//   anonymousToken: '6e4b143c-b3f9-4fed-9d3c-9eaeb521db72',

//   runSocket: true,
//   mobilePlatform: 'ionic'
//});
