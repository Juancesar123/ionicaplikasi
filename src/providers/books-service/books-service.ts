import { Injectable} from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BooksServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BooksServiceProvider {
  constructor(public http: Http) {}
   getdata(){
      let header = new Headers({'x-access-token':JSON.parse(localStorage.getItem('token'))});
      let options = new RequestOptions({headers:header});
      return this.http.get('https://pinjambukuapi.herokuapp.com/books',options).map(res=> res.json());
    }
    simpandata(data){
      let header = new Headers({'content-Type':'application/json','x-access-token':JSON.parse(localStorage.getItem('token'))});
      let options = new RequestOptions({headers:header});
      let body = JSON.stringify(data);
      return this.http.post('https://pinjambukuapi.herokuapp.com/borrowbooks',body,options).map((res=>console.log(res)));
    }
    getdetailbooks(id){
      let header = new Headers({'x-access-token':JSON.parse(localStorage.getItem('token'))});
      let options = new RequestOptions({headers:header});
      return this.http.get('https://pinjambukuapi.herokuapp.com/books/getdetail/'+id,options).map(res => res.json());
    }
}
