import { Users } from './userInterface';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { RegisterPage } from './../register/register';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  //harus di gunakan jika kita menggunakan services di angular2 atau di ionic2
  providers:[AuthenticationProvider]
})
export class LoginPage {
  /*
    di bawah ini merupakan define variable beserta tipe datanya
    Users[] berasal dari interface.ts gunanya untuk define data yang masuk melalui
    API jadi fungsinya untuk mensinkronkan data. jika tidak ada interface data yang di get
    tidak bisa di tampilkan melalui ngFor
  */
  email:String;
  datausers:Users[];
  password:String;
  constructor(public navCtrl: NavController,public toastctrl:ToastController, public navParams: NavParams,public authService:AuthenticationProvider) {
  }
  gettoast(){
    let toast = this.toastctrl.create({
            message:'Login gagal cek username atau password',
            duration:3000,
            position:'top'
          })
    toast.onDidDismiss(()=>{
      console.log('dismiss toast');
    })
    toast.present();
  }
  //ini merupakan fungsi login yang akan mentriger ke event click di login.html
  login(){
    let data = {email:this.email,password:this.password};
    /* 
      di bawah ini merupakan fungsi untuk mengambil data yang kita ambil melalui service
      di folder Provider .subscribe adalah default si ioonic menggunakan fungsi rx/js 
      jadi di provider menggunakan map dan di compenent di tangkap menggunakan .subscribe 
    */
    this.authService.getauthentication(data).subscribe(
       val =>{
        if(val == null){
         return this.gettoast();
        }else{
           localStorage.setItem('users',JSON.stringify(val));
          this.navCtrl.setRoot(TabsPage);
        }
       });
    //
  }
  daftarpage(){
    this.navCtrl.push(RegisterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
