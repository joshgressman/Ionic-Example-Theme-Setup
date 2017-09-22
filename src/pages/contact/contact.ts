import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  isWindows: Boolean;

  constructor(public navCtrl: NavController, public platform: Platform) {
   this.isWindows = platform.is('windows');
  }

}
