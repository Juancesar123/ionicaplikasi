import { Books } from './../books/Booksinterface';
import { BooksServiceProvider } from './../../providers/books-service/books-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewdetailbooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info 
 * on Ionic pages and navigation.
 */
@IonicPage()                                                  
@Component({
  selector: 'page-viewdetailbooks',
  templateUrl: 'viewdetailbooks.html',
  providers:[BooksServiceProvider] 
})
export class ViewdetailbooksPage implements OnInit{
  books : Books[];
  constructor(public navCtrl: NavController, private navParams: NavParams,public booksService:BooksServiceProvider) {
  }
  ngOnInit(){
    // fungsi ini menangkap parameter url(lihat di component books.ts)
    let id = this.navParams.get('id');
    this.booksService.getdetailbooks(id).subscribe(data => this.books = data);
  }
  ionViewDidLoad(item) {
    console.log('ionViewDidLoad ViewdetailbooksPage'+ item);
  }

}
