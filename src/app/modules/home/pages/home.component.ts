import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <app-nav-category></app-nav-category>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
