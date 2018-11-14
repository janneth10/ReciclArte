import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { UnetePage } from '../unete/unete';
import { IngresaPage } from '../ingresa/ingresa';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alert:AlertController, public loading:LoadingController) {

  }
funcunete(){
this.navCtrl.push(UnetePage);
}
funcingresa(){
  this.navCtrl.push(IngresaPage);
}
}
var headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json" );
let options = new RequestOptions({ headers: headers });