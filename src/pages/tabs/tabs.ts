import { BooksPage } from './../books/books';
import { Component, NgModule } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@NgModule({
  imports:[BooksPage]
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = BooksPage;
  constructor() {

  }
}
