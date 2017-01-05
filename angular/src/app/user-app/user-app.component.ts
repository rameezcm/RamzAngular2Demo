import {
 Component,EventEmitter
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

import {
 SharedServiceService
}
from '../shared-service.service';
import * as _ from 'underscore';
import { Router, RouterModule } from '@angular/router';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';


@Component({
 moduleId: "1",
 selector: 'user-app',

 templateUrl: 'user-app.component.html',
 styleUrls: ['user-app.component.css'],
 providers: [UserService]
})
export class UserAppComponent {
 newUser: User = new User();
 emitter = new EventEmitter();
 message: String = "";
 public dataSource ={};
 public users: User[] = [];
 public gridOptions: GridOptions;

 constructor(private userService: UserService ,private sharedService: SharedServiceService , private router :Router) {
	    this.gridOptions = <GridOptions>{};
		this.gridOptions.paginationPageSize = 10;
		this.gridOptions.paginationOverflowSize = 2;
		this.gridOptions.paginationInitialRowCount = 0;
        this.gridOptions.rowData = [];
        this.gridOptions.columnDefs = this.createColumnDefs();
  }

private createColumnDefs() {
        return [
           
            {
                headerName: "Id",
                field: "id",
                editable: true,
                width: 250
            },
            {
                headerName: "Establishment Name",
                field: "name",
				editable: true,
                width: 250
            },
			{
                headerName: "Total Years of Establishment",
                field: "age",
				editable: true,
                width: 250
            }
        ];
    }

	private createDataSource() {
        if (this.users == undefined) {
           
            return this.users;
        }
        console.log("this.rowData " + this.users.length);
        console.log("Obtaining datasource");
		var users = this.users ;
        this.dataSource = {
            rowCount: null,  
            getRows: function (params) {
                console.log('asking for ' + params.startRow + ' to ' + params.endRow);
               
                setTimeout( function() {
              
                var rowsThisPage = users.slice(params.startRow, params.endRow);
               
                var lastRow = -1;
                if (users.length <= params.endRow) {
                    lastRow = users.length;
                }
               
				params.successCallback(rowsThisPage, lastRow);
				
            }, 500);
                
            }
        }
		
    }
    
 getAllUser(): User[] {
 
  this.userService.getAllUser().subscribe(
   data => {
    
    this.users = _.sortBy(data, 'id').reverse();
	this.gridOptions.rowData  =  _.sortBy(data, 'id').reverse();
	//this.gridOptions.api.setRowData(_.sortBy(data, 'id').reverse());
	this.gridOptions.api.refreshView();
	this.createDataSource();
	return this.users;
   },
   error => {
    console.error("Error getting User!");
   }
  );
  return this.users
 }
 
 getSucess() {
	 this.sharedService.saveData(this.newUser);
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
