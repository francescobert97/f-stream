import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-nav-category></app-nav-category>
  </div>

  <div class="">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
