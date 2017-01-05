import { Injectable } from '@angular/core';
import { Http, Response ,Headers ,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from './user';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Rx'



@Injectable()
export class UserService {
  lastId: number = 0;
  users: User[] = [];
  private heroesUrl = 'http://localhost:8080/springmvc-jpa-blank/person/getlist';  // URL to web API
  constructor (private http: Http) {}
  
  addUser(user: User) :Observable<User[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
	return this.http.post('http://localhost:8080/springmvc-jpa-blank/person/addUser/', user).map(res => res.json());
	/*this.http
      .post('http://localhost:8080/springmvc-jpa-blank/person/addUser/', user).subscribe(
       data => {
         // refresh the list
        this.users = JSON.parse(data["_body"]);
       },
       error => {
         console.error("Error saving User!");
         
       }
    );*/
  }
  
  
  getAllUser(): Observable<User[]> {
   
	/*this.http
      .get(this.heroesUrl).subscribe(
      data => {
		// _.each( JSON.parse(data["_body"]) , function(a){console.log(a)});
		this.users = JSON.parse(data["_body"]);
		return JSON.parse(data["_body"]);
	  }
     ) ;
	return this.users;*/
	return this.http.get(this.heroesUrl).map(res => res.json());
  }
  
  getAllUsers(): User[] {
    return this.users;
  } 
}
