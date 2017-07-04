import { LoginPage } from './../login/login';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  //harus di gunakan jika kita menggunakan services di angular2 atau di ionic2
  providers:[AuthenticationProvider]
})
export class RegisterPage {
  nama : String;
  email : String;
  password : String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authservice:AuthenticationProvider) {
  }
  submit(){
    /*
      di bawah ini adalh data yang akan di kirimkan ke server menggunakan API
      let data = {nama:nama} dst. format pengiriman menggunakan json. kemudian variable data
      di bawa ke fungsi register yang ada di auth service
    */
    let data = {nama:this.nama,email:this.email,password:this.password}
    this.authservice.register(data).subscribe(val => alert('data sukses di simpan'));
    //setelah sudah melakukan registrasi makan akan langsung ke login
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
