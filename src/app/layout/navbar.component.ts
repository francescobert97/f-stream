import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-navbar',
  template: `
  <div class="row p-2 text-light">
    <div class="col-sm-3 col-8">
      <app-logo></app-logo>
    </div>
    <div class="col-1"  *appResize="{operation:'createView', conditionMode:'reverse'}">
      <app-hamburger (openElement)="this.isActive = !this.isActive;"></app-hamburger>
    </div>

    <div class="col-sm-7 col-12  mx-auto navbar-links" [ngClass]="{'active gradient-bg':isActive} ">
      <a class="mx-3" href="javascript:void(0)" routerLink="/home/comedy"  routerLinkActive="active-link">Home</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/area/edfferfer"  routerLinkActive="active-link" (mouseover)="isTooltipVisible = true">Area Personale</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/notizie"  routerLinkActive="active-link">Notizie</a>
    </div>

    <div *ngIf="isTooltipVisible" class="position-absolute">
      <app-tooltip (activateSomething)="isTooltipVisible = false"></app-tooltip>
    </div>

    <div id="user-tools-section" *ngIf="user; else notlog" (click)="userMenu = !userMenu" class="d-flex align-items-center mt-2 col-sm-1  col-1 offset-1">
        <img src="{{user?.picture}}">
        <p class="mx-4">{{user?.username}}</p>
    </div>

    <div class="d-flex flex-column align-items-center" id="user-menu" *ngIf="userMenu">
        <p class="mx-4 d-none">{{user?.username}}</p>
        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" routerLink="/area">Vedi le informazioni complete</a>
        <app-custom-button (callFnFromOutside)="logoutUser()" [customDataButton]="{label: 'Logout',classes: '',link:'/'}"></app-custom-button>
      </div>

    <ng-template #notlog>
      <p class="mt-2">Not Logged</p>
    </ng-template>
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



      #user-tools-section {
        img {
          height: 100%;
          width: clamp(2rem, 4rem, 6rem);
          border-radius: 10px;
        }
      }


      #user-menu {
        position: absolute;
        top: 90%;
        right: 0;
        a {
          font-size: 0.7em;
          text-decoration: underline
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

      #user-tools-section {
        img {
          zoom: 70%;
        }
      p:first-of-type{
        display:none;
      }
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
  user!:IUser
  userMenu:boolean = false;
  isActive:boolean = false;
  isTooltipVisible:boolean = false;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {

    this.loginService.currentUser.subscribe(data => {
      if(localStorage.currentUser) {
        this.user = JSON.parse(localStorage.currentUser)
      }
    })

  }
  showMenu() {
    this.isActive = !this.isActive;
  }

  showTooltip (){

  }
  logoutUser() {
    this.loginService.logout()
    this.loginService.currentUser.subscribe(data => {
      this.user = data;
    })
    //this.router.navigateByUrl('')
  }

}
