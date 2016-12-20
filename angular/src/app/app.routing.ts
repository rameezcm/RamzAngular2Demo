import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserAppComponent } from './user-app/user-app.component';
import { SucessComponent } from './sucess/sucess.component';

const appRoutes: Routes = [
  {
    path: 'sucess',
    component: SucessComponent
  },
  {
    path: '',
    component: UserAppComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
