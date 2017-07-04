import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  nama:String;
  ngOnInit(){
    /* ini adalah untuk parse dari json.stringify di local storage ke data json 
       localstorage.getitem('users') get data dari localsotrage yang sudah di simpan
    */
    this.nama = JSON.parse(localStorage.getItem('users'));
  }
  constructor(public navCtrl: NavController) {

  }

}
