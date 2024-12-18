import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer row text-light d-flex justify-content-center p-4 mt-3 gradient-bg">
    <div class="col-5 col-sm-3">
      <app-logo [classes]="' active-link'"></app-logo>
    </div>

      <div class="d-flex justify-content-between col-sm-3 col-7">
        <a>Termini e privacy</a>
        <a>Informativa sui cookie</a>
        <a>Supporto</a>
        <span>Francesco, 2021</span>
      </div>
  </div>
  `,
  styles: [
    `
    .footer {

      font-size: 1em;
      text-shadow: var(--text-shadow);
      @media (max-width: 600px) {
      font-size: 0.7em;
      }
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
