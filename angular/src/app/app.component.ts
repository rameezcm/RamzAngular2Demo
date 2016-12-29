import { Component } from '@angular/core';
import {
 SharedServiceService
}
from './shared-service.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  providers: [SharedServiceService]
})
export class AppComponent {
  title = 'app works!';
}
