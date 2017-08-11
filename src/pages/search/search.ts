import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})


export class SearchPage {

  searchQuery: string = '';
  items;

  posts: any;

  constructor(public navCtrl: NavController,private backand: BackandService) {
    this.initializeItems();
  }

  itemtemp() {
    this.navCtrl.push(ItemPage);
  }

  initializeItems() {
  
  this.items = 
    [
    //  this.http.get(3-ring binders),
      '3-ring binders',
      'aluminum',
      'antifreeze',
      'appliance containing CFC/Freon',
      'art supplies',
      'asbestos',
      'autobattery',
      'backup battery',
      'barbeque grill',
      'battery (alkaline)',
      'battery (rechargeable)',
      'bed frame (mostly metal or rigid plastic)',
      'bed frame (not mostly metal or rigid plastic)',
      'beer bottle/can',
      'bioplastics',
      'blanket',
      'book (hard cover)',
      'book (paperback)',
      'box spring',
      'branches/tree limbs (do-it-yourself)',
      'branches/tree limbs (hired professional)',
      'broken fluorescent light',
      'bulk (mostly metal or rigid plastic)',
      'bulk (not mostly metal or rigid plastic)',
      'button battery',
      'cables (loose)',
      'cameras',
      'caps and lids',
      'carbonated beverage container',
      'cardboard',
      'cardboard cannisters (metal tops/bottoms)',
      'carpet/rug',
      'cassettes/VHS tapes',
      'catalog',
      'CDs/DVDs/disks',
      'cell phone',
      "children's items",
      'Christmas tree (fake - mostly metal or plastic)',
      'Christmas tree (fake - not mostly metal or rigid plastic)',
      'Christmas tree (natural)',
      'cleaning products (labeled DANGER-corrosive)',
      'cleaning products (NOT labeled DANGER-corrosive)',
      'clips (metal or plastic)',
      'clothing and accessories',
      'collectibles',
      'commercial waste',
      'compact fluorescent light bulb (CFL)',
      'computers and peripherals',
      'construction material (do-it-yourself)',
      'construction material (from hired contractor)',
      'cooking oil and grease',
      'cosmetics',
      'degradable plastics',
      'digital music player (portable)',
      'disposable coffee pods',
      'eyeglasses',
      'fax machine (not connected to a computer)',
      'fire extinguisher (CO2 or dry chemical)',
      'fire extinguisher (non CO2 or dry chemical)',
      'flammable liquids',
      'fluorescent light tube',
      'food (non perishable)',
      'food (perishable fruit and vegetable scraps bread and grains)',
      'food (perishable meat dairy prepared foods)',
      'food or beverage carton',
      'furniture (mostly metal or rigid plastic)',
      'furniture (not mostly metal or rigid plastic)',
      'garden hose',
      'gardening supplies (mostly metal or rigid plastic)',
      'gardening supplies (not mostly metal or rigid plastic)',
      'glass bottle/jar',
      'glass window (metal frame)',
      'glass window (non-metal frame)',
      'glassware',
      'gps devices',
      'grass clippings',
      'hanger (metal or rigid plastic)',
      'hanger (non-metal or rigid plastic)',
      'hanging folder',
      'headphones',
      'helium balloon tank',
      'highly corrosive liquids',
      'household chemicals',
      'household sharps',
      'houseplants and flowers',
      'housewares (mostly metal or rigid plastic)',
      'housewares (not mostly metal or rigid plastic)',
      'knife/sharp metal object',
      'large appliance (mostly metal or rigid plastic no CFCs)',
      'aerosol can (empty)',
      'leaf and yard waste (from hired landscaper)',
      'license plates',
      'light bulb (incandescent or LED)',
      'lighters',
      'lighting fixtures/lamps (metal or rigid plastic)',
      'luggage/suit case',
      'mail',
      'mattress',
      'medical equipment (mostly metal or rigid plastic)',
      'medical equipment (not mostly metal or rigid plastic)',
      'medical waste (household- other than sharps or medications)',
      'mercury (liquid)',
      'mercury thermometers and other mercury containing devices',
      'metal can',
      'microwave (mostly metal or rigid plastic)',
      'microwave (not mostly metal or rigid plastic)',
      'mixed paper',
      'motor oil',
      'motor oil filter',
      'musical instrument (mostly metal or rigid plastic)',
      'musical instrument (not mostly metal or rigid plastic)',
      'newspapers magazines and catalogs',
      'office supplies (mostly metal or rigid plastic)',
      'office supplies (paper & cardboard)',
      'other gas tanks (acetylene or oxygen or other)',
      'paint (latex) in metal or rigid plastic can or bucket',
      'paint (non-latex) in non-metal or plastic can or bucket',
      'pens/markers',
      'personal hygiene items',
      'pesticides',
      'pizza box',
      'plastic bag',
      'plastic envelopes',
      'plastic flexible packaging',
      'plastic food wraps and wrappers',
      'plastic photographic film',
      'plastic rigid container (food and beverage)',
      'plastic rigid container (household chemicals DANGER-corrosive)',
      'plastic rigid container (non food or chemical)',
      'plastic rigid packaging',
      'plastic rings',
      'plastic shipping packaging',
      'plastic wrap/plastic food bags',
      'plumbing (metal)',
      'plumbing (non-metal)',
      'print cartridges',
      'propane tanks',
      'protective packaging (foam)',
      'protective packaging (paper or cardboard)',
      'protective packaging (rigid plastic)',
      'shredded paper',
      'single-use food service items (foam)',
      'single-use food service items (not rigid plastic or paper)',
      'single-use food service items (paper or cardboard)',
      'single-use food service items (rigid plastic - not foam)',
      'small appliance (mostly metal or rigid plastic)',
      'small appliance (not mostly metal or rigid plastic)',
      'small appliance (with rechargeable batteries)',
      'smoke detectors (optical) or carbon monoxide detectors',
      'smoke or carbon monoxide detectors (ionization)',
      'sofa bed',
      'soiled paper',
      'sponges',
      'sport equipment (mostly metal or rigid plastic)',
      'sport equipment (not mostly metal or rigid plastic)',
      'tablets and e-readers',
      'telephone (non-mobile)',
      'telephone book',
      'thermostats (mercury)',
      'tire (auto)',
      'tire (bicycle)',
      'toothbrush (rigid plastic)',
      'toothbrush (electric)',
      'toy (mostly metal or rigid plastic)',
      'toy (not mostly metal or rigid plastic)',
      'TVs and peripherals',
      'umbrellas',
      'unwanted medication',
      'vehicle',
      'wagon/cart (mostly metal or rigid plastic)',
      'wagon/cart (not mostly metal or rigid plastic)',
      'water bottle',
      'wax or plastic coated paper',
      'wine bottle',
      'wine cooler',
      'wreath',
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
