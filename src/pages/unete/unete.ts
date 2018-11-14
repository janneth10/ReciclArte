import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl  } from '@angular/forms';

/**
 * Generated class for the UnetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unete',
  templateUrl: 'unete.html',
})
export class UnetePage {

  public registroForm: FormGroup;
  public registroForm: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public loading:LoadingController) {

      this.registroForm = this.formBuilder.group({
        nombre: ['', Validators.compose([Validators.required])],
        documento: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        telefono: ['', Validators.compose([Validators.required])],
        contrasena: ['', Validators.compose([Validators.required])],
        contrasena2: ['', Validators.compose([Validators.required])]
      });
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  
  registro() {
    console.log(this.registroForm.value);
  }

}
