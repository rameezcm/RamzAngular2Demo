import {
 Component
}
from '@angular/core';
import {
 User
}
from '../user';
import {
 UserService
}
from '../user.service';
import * as _ from 'underscore';
import { Router, RouterModule } from '@angular/router';

@Component({
 moduleId: "1",
 selector: 'user-app',
 templateUrl: 'user-app.component.html',
 styleUrls: ['user-app.component.css'],
 providers: [UserService]
})
export class UserAppComponent {
 newUser: User = new User();
 message: String = "";
 public users: User[] = [];
 // users: User[]
 constructor(private userService: UserService , private router :Router) {
  this.users = [];
 }


 getAllUser(): User[] {
  //this.users = _.sortBy(this.userService.getAllUser(), 'id');
  //return this.users ;
  this.userService.getAllUser().subscribe(
   data => {
    // refresh the list
    this.users = _.sortBy(data, 'id').reverse();
    return this.users;
   },
   error => {
    console.error("Error getting User!");
   }
  );
  return this.users
 }
 
 getSucess() {
	 this.router.navigate(['/establishment']);
 }
 
 addUser(newUser): User[] {
  this.userService.addUser(newUser).subscribe(
   data => {
    // refresh the list
    this.users = [];
    newUser = new User();
    newUser.name = " ";
    newUser.age = " ";
    this.message = "Establishment Added";
    this.users = _.sortBy(data, 'id').reverse();
    return this.users;
   },
   error => {
    console.error("Error saving User!");
   }
  );
  return this.users;
 }
}