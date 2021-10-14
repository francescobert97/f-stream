import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
  <div class="d-flex justify-content-start">
    <app-nav-category></app-nav-category>
  </div>

  <div>
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
