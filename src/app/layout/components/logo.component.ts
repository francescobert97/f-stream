import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div id="logo" [class]="classes" class="h-100 "></div>

  `,
  styles: [
    `
      #logo {
        max-width: 15rem;
        min-height: 70px;
        background: url("../../../assets/images/F-Stream-logo.png") center;
        background-size: 110%;
      }
    `
  ]
})
export class LogoComponent implements OnInit {
@Input() classes:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
