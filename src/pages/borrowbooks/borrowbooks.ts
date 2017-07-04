import { BooksServiceProvider } from './../../providers/books-service/books-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  providers:[BooksServiceProvider]
})
export class BorrowbooksPage {
    nama : String;
    notelpon : String;
    email : String;
    jumlah: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public BooksService: BooksServiceProvider) {
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
