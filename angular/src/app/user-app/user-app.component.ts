import {Component} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import * as _ from 'underscore';

@Component({
  moduleId: "1",
  selector: 'user-app',
  templateUrl: 'user-app.component.html',
  styleUrls: ['user-app.component.css'],
  providers: [UserService]
})
export class UserAppComponent {

  newUser: User = new User();
  
  users: User[] = this.userService.getAllUser();

  constructor(private userService: UserService) {
  }

  getAllUser(){
	this.users = _.sortBy(this.userService.getAllUser(), 'id');
  }
  
  addUser(newUser){
	 this.userService.addUser(newUser);
	
	 this.users =  _.sortBy(this.userService.getAllUser(), 'id');
  }
}