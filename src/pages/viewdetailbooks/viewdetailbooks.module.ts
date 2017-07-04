import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewdetailbooksPage } from './viewdetailbooks';

@NgModule({
  declarations: [
    ViewdetailbooksPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewdetailbooksPage),
  ],
  exports: [
    ViewdetailbooksPage
  ]
})
export class ViewdetailbooksPageModule {}
