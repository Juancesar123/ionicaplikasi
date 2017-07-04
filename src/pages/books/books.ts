import { BorrowbooksPage } from './../borrowbooks/borrowbooks';
import { Books } from './Booksinterface';
import { ViewdetailbooksPage } from './../viewdetailbooks/viewdetailbooks';
import { BooksServiceProvider } from './../../providers/books-service/books-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the BooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
  //harus di gunakan jika kita menggunakan services di angular2 atau di ionic2
   providers:[BooksServiceProvider]
})
export class BooksPage implements OnInit{
text: string;
  arraybook:Books[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public booksdata:BooksServiceProvider) {
  }
  goToOtherPage(item){
    /* digunakan untuk menampilkan pages berikutnya dengan menggunakan push
       ionic secara otomatis akan menampilkan tombol back di pojok kanan atas/
       {id:item._id} parameter id yang akan di kirimkan ke view detail book
       untuk melihat detail buku yang di pilih
    */
    this.navCtrl.push(ViewdetailbooksPage,{id:item._id});
  }
  borrowbooks(){
    this.navCtrl.push(BorrowbooksPage);
  }
  //NgOnInit adalah fungsi yang akan di eksekusi saat pertama di load
  ngOnInit(){
        /* 
          di bawah ini merupakan fungsi untuk mengambil data yang kita ambil melalui service
          di folder Provider .subscribe adalah default si ioonic menggunakan fungsi rx/js 
          jadi di provider menggunakan map dan di compenent di tangkap menggunakan .subscribe 
        */
    this.booksdata.getdata().subscribe(val=> this.arraybook = val);
  }
}
