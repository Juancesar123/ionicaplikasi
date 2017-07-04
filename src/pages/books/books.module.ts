import { ViewdetailbooksPageModule } from './../viewdetailbooks/viewdetailbooks.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksPage } from './books';

@NgModule({
  declarations: [
    BooksPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksPage),
  ],
  exports: [
    BooksPage
  ]
})
export class BooksPageModule {}
