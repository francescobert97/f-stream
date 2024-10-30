import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  template: `
  <div id="intro-animation" *ngIf="closeAnimation">
    <app-landing-intro></app-landing-intro>
  </div>
<div class="row">
  <router-outlet></router-outlet>
</div>

  `,
  styles: [
    `
    #intro-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
      overflow-x: hidden;
    }


    `
  ]
})
export class LandingComponent implements OnInit {

  public closeAnimation = false;

  constructor( private router: Router) { }
  ngOnInit(): void {
    if(localStorage.currentUser) {
      this.router.navigateByUrl('home/comedy')
    }

    setTimeout(() => {
      this.closeAnimation = false
    }, 4700);
  }

}
