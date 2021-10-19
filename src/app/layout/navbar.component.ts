import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-navbar',
  template: `
  <div id="navbar" class="d-flex justify-content-between align-items-center p-2">
    <div id="logo" class="mt-2">
    </div>

    <div class="d-flex justify-content-center">
      <a class="mx-3" href="javascript:void(0)" routerLink="/home/commedia"  routerLinkActive="active-link">Home</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/area"  routerLinkActive="active-link">Area Personale</a>
      <a class="mx-3" href="javascript:void(0)" routerLink="/notizie"  routerLinkActive="active-link">Notizie</a>
    </div>

    <div *ngIf="user; else notlog" (click)="userMenu = !userMenu" class="d-flex align-items-center mt-2">
      <div id="user-picture" class="mx-1">
       <img src="{{user?.picture}}">
      </div>
      <p class="mx-4">{{user?.username}}</p>

      <div class="d-flex flex-column align-items-center" id="user-menu" *ngIf="userMenu">
        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" routerLink="/area">Vedi le informazioni complete</a>
        <button class="" (click)="logoutUser()">Logout</button>
      </div>
    </div>

    <ng-template #notlog>
      <p class="mt-2">Not Logged</p>
    </ng-template>
  </div>
  `,
  styles: [
    `
    #navbar {
      text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
      background: rgb(41,43,44);
      position: relative;
      color: white;
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
        width: 18rem;
        height: 4rem;
        background: url("../../assets/images/F-Stream-logo.png") center;
        background-size: 110%;
        img {
          width: 6rem;
          height: 6rem;
        }
      }

      #user-picture {
        width: 4rem;
        height: 4rem;
        border-radius: 5px;
        background:white;
        img {
          width: 100%;
          height: 100%;
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
          text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
          box-shadow: 0px 10px 13px -7px #000000, 1px 1px 100px -10px rgba(180,180,250,0.4);
          &:hover {
            background: white;
            color: black;
          }
        }
      }


    }
    `
  ]
})
export class NavbarComponent implements OnInit {
  user!:IUser
  userMenu:boolean = false;

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
