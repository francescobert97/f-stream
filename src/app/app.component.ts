import { Component, OnInit } from '@angular/core';
import { ILogin } from './shared/models/login.model';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="">
    <app-navbar></app-navbar>
  </div>

  <div id="router-content"class="d-flex justify-content-center text-light">
    <router-outlet></router-outlet>
  </div>

  <div>
    <app-footer></app-footer>
  </div>
  `,
  styles: [
    `
    #router {
      width: 100vw;
    }
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
