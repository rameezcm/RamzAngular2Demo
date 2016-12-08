import {Component} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

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
	this.users = this.userService.getAllUser();
  }
}