import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-intro',
  template: `
  <div [style.top]="animation.showFirstA? null : '-9999px' " id="animation-1" class="bg-dark"></div>

  <div id="animation-3" [style.left]="animation.showThirdA? null : '-9999px' " class="bg-dark"></div>

  <div *ngIf="animation.showFourthA;" id="video-logo">
    <img [class]="animation.logoEffect? 'logo-animation' : null " src="../../../../assets/images/F-Stream.png">
  </div>

  <div id="animation-4" [style.right]="animation.showFourthA? null : '-9999px' " class="bg-dark"></div>

  <div [style.bottom]="animation.showSecondA? null : '-9999px' " id="animation-2" class="bg-dark"></div>
  `,
  styles: [
    `
    #animation-1 {
      height: 50vh;
      width: 100vw;
      position:absolute;
      top: 0;
      transition: 1.5s;
      z-index: 998;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }

    #video-logo {
      z-index: 999;
      position:absolute;
      top: 31%;
      left: 36%;
      transition: 3s;
      img {
        transition: 1.6s;
        width: 350px;
        z-index: 1001;
        border-radius: 50%;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
      }
    }

    #animation-2 {
      height: 50vh;
      width: 100vw;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: 1.5s;
      z-index: 998;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }

    #animation-3 {
      height: 100vh;
      width: 50vw;
      left: 0;
      position: absolute;
      transition: 1.5s;
      z-index: 997;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }

    #animation-4 {
      height: 100vh;
      width: 50vw;
      right: 0;
      position: absolute;
      transition: 1.5s;
      z-index: 997;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }

    .logo-animation {
      transform: rotate(-710deg) scale(34.9);
    }

    `
  ]
})
export class LandingIntroComponent implements OnInit {
public animation = {
  showFirstA: true,
  showSecondA: true,
  showThirdA: true,
  showFourthA: true,
  logoEffect: true
}


  constructor() { }

  ngOnInit(): void {
    this.introAnimation()
  }

  public introAnimation() {
    setTimeout(() => this.animation.logoEffect = false, 200);

    setTimeout(() => this.animation.showFirstA = false,  3400);

    setTimeout(() => this.animation.showSecondA = false, 3700);

    setTimeout(() => this.animation.showThirdA = false,  4000);

    setTimeout(() => this.animation.showFourthA = false, 4300);
    
  }
}
