import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  token:String;
  ngOnInit(){
    /* ini adalah untuk parse dari json.stringify di local storage ke data json 
       localstorage.getitem('users') get data dari localsotrage yang sudah di simpan
    */
    this.token = JSON.parse(localStorage.getItem('token'));
  }
  constructor(public navCtrl: NavController) {

  }

}
