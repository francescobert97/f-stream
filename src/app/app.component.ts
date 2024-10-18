import { Component, OnInit } from '@angular/core';
import { ILogin } from './shared/models/login.model';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
      <app-navbar></app-navbar>
      <div class="text-light">
        <router-outlet></router-outlet>
      </div>
        <app-footer></app-footer>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class AppComponent implements OnInit {
  title = 'stream';
  dataLogin!:ILogin;

  constructor(private loginService: LoginService) {}
  ngOnInit():void {

  }

}
