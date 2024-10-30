import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div id="content-landing" class="col-10 offset-sm-3 col-sm-6 mx-auto p-5 d-flex align-items-center justify-content-center flex-column mt-4 active-link">
    <div class="text-style col-sm-6">
      <h1>Il migliore sito di streaming sul mercato</h1>
      <p>Film, Serie TV, documentari e tanto altro.</p>
      <h2>Registrati o accedi se hai già un account</h2>
      <app-custom-button [customDataButton]="{label:'Registrati', classes: 'gradient-bg', link: '/registration'}"></app-custom-button>
    </div>
    <app-login-form></app-login-form>
  </div>
  `,
  styles: [
    `
         #content-landing {
      background: url("../../../../assets/images/landing-img.jpg") center;
      background:cover;

      .text-style {
        h1 {
          font-size: 3.3em;
          text-shadow: var(--text-shadow)
        }
      }
    }

    @media(max-width: 600px) {
      #content-landing {
        font-size: 0.6em;
      .text-style {

        h1 {
          font-size: 2em;
          text-shadow: var(--text-shadow)
        }

        h2{
          font-size: 1.2em;
        }
      }
    }
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
