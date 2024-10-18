import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-navbar',
  template: `
  <div class="row p-2 text-light ">
  <div id="logo" class="col-sm-3 h-100 col-10"></div>
      <div class="flex-column hamburger col-1 h-100  mx-auto" (click)="isActive = !isActive">
        <span>____</span>
        <span>____</span>
        <span>____</span>
      </div>
    <div class="col-sm-7 col-12  mx-auto navbar-links" [ngClass]="{'active': isActive}">
      <a class="mx-3" href="javascript:void(0)" routerLink="/home/commedia/comedy"  routerLinkActive="active-link">Home</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/area"  routerLinkActive="active-link">Area Personale</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/notizie"  routerLinkActive="active-link">Notizie</a>
    </div>

    <div id="user-tools-section" *ngIf="user; else notlog" (click)="userMenu = !userMenu" class="d-flex align-items-center mt-2 col-sm-1  col-1">
        <img src="{{user?.picture}}">
        <p class="mx-4">{{user?.username}}</p>
    </div>

    <div class="d-flex flex-column align-items-center" id="user-menu" *ngIf="userMenu">
        <p class="mx-4 d-none">{{user?.username}}</p>
        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" routerLink="/area">Vedi le informazioni complete</a>
        <button class="" (click)="logoutUser()">Logout</button>
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

      #logo {
        max-width: 15rem;
        min-height: 70px;
        background: url("../../assets/images/F-Stream-logo.png") center;
        background-size: 110%;
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
        button {
          width: 5rem;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          border:none;
          background: transparent;
          text-shadow:var(--text-shadow);
          box-shadow: 0px 10px 13px -7px #000000, 1px 1px 100px -10px rgba(180,180,250,0.4);
          &:hover {
            background: white;
            color: black;
          }
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
  .hamburger {
    line-height:0.6;
    text-shadow: var(--text-shadow);
    display:none;
    }

    @media (max-width: 600px) {
      #logo {
        max-width: 18rem;
        min-height: 70px;
        background: url("../../assets/images/F-Stream-logo.png") center;
        background-size: 110%;
      }

      #user-tools-section {
      p:first-of-type{
        display:none;
      }
      }
    .hamburger {
      display: flex;
    }


    .navbar-links {
      display:none;
      flex-direction: column;
      z-index: 100;
      background: red;
    }
  }

  `
  ]
})
export class NavbarComponent implements OnInit {
  user!:IUser
  userMenu:boolean = false;
  isActive:boolean = false;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(data => {
      if(localStorage.currentUser) {
        this.user = JSON.parse(localStorage.currentUser)
      }
    })

  }

  logoutUser() {
    this.loginService.logout()
    this.loginService.currentUser.subscribe(data => {
      this.user = data;
    })
    this.router.navigateByUrl('')
  }

}
