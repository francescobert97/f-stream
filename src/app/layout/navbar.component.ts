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

      <div id="user-menu" *ngIf="userMenu">
        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" routerLink="/area">Vedi le informazioni complete</a>
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
      }


    }
    `
  ]
})
export class NavbarComponent implements OnInit {
  user!:IUser;
  userMenu:boolean = false;

  constructor(private loginService: LoginService, private Router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(data => {
      if(data) {
        console.log(data)
        this.user = data;
        this.Router.navigateByUrl('/home/commedia')
      }
    })
  }

  //log() { this.dataLogin = this.loginUserService.obtainData(this.dataLogin)
    //console.log(this.dataLogin)}

  
}
