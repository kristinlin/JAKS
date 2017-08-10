import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IdentifierPage } from '../pages/identifier/identifier';
import { BarcodePage } from '../pages/barcode/barcode';
import { HomePage } from '../pages/home/home';
import { SearchPage} from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemPage} from '../pages/item/item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { BackandService } from '@backand/angular2-sdk';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    IdentifierPage,
    BarcodePage,
    HomePage,
    SearchPage,
    ItemPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp,
  ],
  entryComponents: [
    MyApp,
    IdentifierPage,
    BarcodePage,
    HomePage,
    SearchPage,
    ItemPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    BackandService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})



export class AppModule {}
