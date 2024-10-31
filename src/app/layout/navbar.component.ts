import { IUser } from './../shared/models/user.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { of, Subscription, timer } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="row p-2 text-light">
    <div class="col-sm-3 col-8">
      <app-logo></app-logo>
    </div>
    <div class="col-1"  *appResize="{operation:'createView', conditionMode:'reverse', width: 600}">
      <app-hamburger (openElement)="this.isActive = !this.isActive;"></app-hamburger>
    </div>

    <div class="col-sm-7 col-12  mx-auto navbar-links" [ngClass]="{'active gradient-bg':isActive} ">
      <a class="mx-3" href="javascript:void(0)" routerLink="/home/comedy"  routerLinkActive="active-link">Home</a>
      <a #ref class="mx-3" href="javascript:void(0)" routerLink="/area/blocked"  routerLinkActive="active-link" (mouseover)="showTooltip()">Area Personale</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/notizie"  routerLinkActive="active-link">Notizie</a>
    </div>

    <div *ngIf="isTooltipVisible" class="position-absolute z-index-moreover top-sm-50 bottom-0 mb-5">
      <app-tooltip></app-tooltip>
    </div>

    <div class="h-100 col-sm-1  col-1 offset-1">
      <app-user-bar [user]="user" (showTooltip)="isTooltipVisible = !isTooltipVisible"></app-user-bar>
    </div>
  </div>

  `,
  styles: [
    `
      a {
        font-size: 1.7em;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        padding: 0.7rem;
        &:hover {
          transform: scale(1.1);
        }
      }


      .navbar-links {
        display:flex;
        justify-content: center;
      }
      .active {
        display:flex!important;
        position:absolute;
        top:10%;
        left: 0;
      }


    @media (max-width: 600px) {
      #logo {
        max-width: 18rem;
        min-height: 70px;
        background: url("../../assets/images/F-Stream-logo.png") center;
        background-size: 110%;
      }
    .navbar-links {
      display:none;
      flex-direction: column;
      z-index: 100;
    }
  }

  `
  ]
})
export class NavbarComponent implements OnInit {
  user!:IUser;
  userMenu:boolean = false;
  isActive:boolean = false;
  isTooltipVisible:boolean = false;
  newSubscription:Subscription = new Subscription()
  constructor(private loginService: LoginService, private router:Router, private CD:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loginService.currentUser$.subscribe((user:IUser) => user?this.user = user : this.router.navigateByUrl('/'));
  }
  showMenu() {
    this.isActive = !this.isActive;
  }

  showTooltip (){
  this.newSubscription.unsubscribe()
  const obs$ =  of(true).pipe(
    tap(data => this.isTooltipVisible = true),
      exhaustMap(() => timer(3000)),
      tap(data => this.isTooltipVisible = false)
    )
   this.newSubscription =  obs$.subscribe(data =>console.log(this.isTooltipVisible))

  }
  logoutUser() {
    this.loginService.logout()
  }

}
