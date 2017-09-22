import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController) {
   this.presentLoading()
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait",
      duration: 3000
    });
    loader.present();
  }

}
