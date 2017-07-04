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
      return this.http.get('http://localhost:3000/books').map(res=> res.json());
    }
    simpandata(data){
      let header = new Headers({'content-Type':'application/json'});
      let options = new RequestOptions({headers:header});
      let body = JSON.stringify(data);
      return this.http.post('http://localhost:3000/borrowbooks',body,options).map((res=>console.log(res)));
    }
    getdetailbooks(id){
      return this.http.get('http://localhost:3000/books/getdetail/'+id).map(res => res.json());
    }
}
