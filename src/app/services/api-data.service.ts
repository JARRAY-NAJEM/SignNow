import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
   url=environment.url
  constructor(private http : HttpClient) { }
  getdataRole(){
    return this.http.get(this.url+"/roles")
  }
  getdataUser(){
    return   this.http.get(this.url + '/users')

  }




  addregister(data : any):Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
   console.log(body)

    return this.http.post(this.url+'/createuser',data,{'headers':headers})
  }



  // deleterole(){
  //   let index="/roles/2"
  //   return this.http.delete(this.url+index)
  //   //.subscribe(
  //     //res => console.log(res))
  // }
  // this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  // .subscribe(() => this.status = 'Delete successful');
}
