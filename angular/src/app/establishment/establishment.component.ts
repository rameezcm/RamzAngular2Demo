import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import {
 SharedServiceService
}
from '../shared-service.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css'],
 // providers: [SharedServiceService]
})
export class EstablishmentComponent implements OnInit {
  newUser : User  = new User();
  constructor(private sharedService :SharedServiceService) {
	  this.newUser = this.sharedService.getData();
	  }
  
  getEstData() {

  alert("test")
       
    }
  ngOnInit() {
	  this.newUser = this.sharedService.getData()
  }

}
