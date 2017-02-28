import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class UserService {

  http: any;

  constructor( @Inject(Http) http) {
    this.http = http;
  }

  getUsers() {
    return this.http.get('http://localhost:3000/api/');
  }

  addUser(data) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/api/adduser', JSON.stringify(data), options)
      .map(res => res.json());
  }

  deleteUser(data) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/api/deleteuser', JSON.stringify(data), options)
      .map(res => res.json());
  }


}