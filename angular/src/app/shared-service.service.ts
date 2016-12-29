import { Injectable } from '@angular/core';
import { Http, Response ,Headers ,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from './user';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class SharedServiceService {
 private data = new User();
  constructor() { }
   saveData(user: User) : void{
	  this.data = user ;
   } ; 

  getData(): User {
	  
	  return this.data ;
	  
  };
}
