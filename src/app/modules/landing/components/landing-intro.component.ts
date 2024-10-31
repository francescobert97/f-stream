import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-intro',
  template: `
<div class="bg-white w-100 h-100">
  <div class="animation-2024 w-100 h-100 d-flex justify-content-center align-items-center"><img src="../../../../assets/images/F-Stream.png">
</div>
  `,
  styles: [
    `
    @keyframes logoAn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animation-2024 {
      animation: logoAn 1.5s ease-out forwards;
      img {
      }
    }
    .bg-white {
      background: #fff;
    }

    @media(max-width: 600px) {
      .animation-2024 {
        img {
          zoom:70%;
        }
      }
    }
    `
  ]
})
export class LandingIntroComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
