import { Component, OnInit } from '@angular/core';
import { ILogin } from './shared/models/login.model';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid d-flex flex-column vh-100">
      <app-navbar></app-navbar>
      <div class="text-light content">
        <router-outlet></router-outlet>
      </div>
        <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
    .content {
      flex-grow:1;
      width:100%;
      height: 100%;
    }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'stream';

  constructor() {}
  ngOnInit():void {

  }

}
