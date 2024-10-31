import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid d-flex flex-column vh-100">
      <app-navbar></app-navbar>
      <div class="text-light content overflow-scroll scrollbar-none">
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
      overflow-y: scroll;
      scrollbar-width:none;
      overflow-x: none;

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
