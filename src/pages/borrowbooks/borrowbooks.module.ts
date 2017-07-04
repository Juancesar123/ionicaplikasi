import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowbooksPage } from './borrowbooks';

@NgModule({
  declarations: [
    BorrowbooksPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowbooksPage),
  ],
  exports: [
    BorrowbooksPage
  ]
})
export class BorrowbooksPageModule {}
