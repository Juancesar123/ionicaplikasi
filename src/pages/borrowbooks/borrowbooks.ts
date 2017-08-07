import { BooksServiceProvider } from './../../providers/books-service/books-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';
/**
 * Generated class for the BorrowbooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-borrowbooks',
  templateUrl: 'borrowbooks.html',
  providers:[BooksServiceProvider,Camera]
})
export class BorrowbooksPage {
  public base64Image: string;

    nama : String;
    notelpon : String;
    email : String;
    jumlah: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public BooksService: BooksServiceProvider) {
  }
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
    simpandata(){
    let  data = {nama:this.nama,notelpon:this.notelpon,email:this.email,jumlah:this.jumlah}
    this.BooksService.simpandata(data).subscribe(data => console.log('okebro'));
    alert('okee');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowbooksPage');
  }

}
