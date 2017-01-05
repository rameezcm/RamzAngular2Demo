import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserAppComponent } from './user-app/user-app.component';
import { SucessComponent } from './sucess/sucess.component';
import { routing,
         appRoutingProviders }  from './app.routing';
import { EstablishmentComponent } from './establishment/establishment.component';
import {AgGridModule} from "ag-grid-ng2/main";

@NgModule({
  declarations: [
    AppComponent,
    UserAppComponent,
    SucessComponent,
    EstablishmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routing,
	AgGridModule.withComponents(
            [
               UserAppComponent 
            ]),
  ],
  providers:    [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
