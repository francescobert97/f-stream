import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-bar',
  template: `

    <div id="user-tools-section" *ngIf="user.id > 0; else notlog" (click)="userMenu = !userMenu" class="d-flex align-items-center mt-2 text-light">
        <img src="{{user.picture}}">
        <p class="mx-4">{{user.username}}</p>
    </div>
  <div class="d-flex flex-column align-items-center  gradient-bg" id="user-menu" *ngIf="userMenu">
        <p class="mx-4 d-none">{{user.username}}</p>
        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" routerLink="/area/blocked"  (mouseover)="triggerTooltip()">Vedi le informazioni complete</a>
        <app-custom-button (callFnFromOutside)="logoutUser()" [customDataButton]="{label: 'Logout',classes: '',link:'/'}"></app-custom-button>
  </div>

    <ng-template #notlog>
      <p class="mt-2  col-sm-1  col-1 offset-1">Not Logged</p>
    </ng-template>
  `,
  styles: [
    `

    #user-tools-section {
      img {
        height: 100%;
        width: clamp(2rem, 4rem, 6rem);
        border-radius: 10px;
      }
    }

    #user-menu {
        position: absolute;
        width: 5%;
        top: 7%;
        left:92%;
        text-decoration: none;

        right: 0;
        a {
          font-size: 0.7em;
          text-decoration: underline
        }
      }


    @media (max-width: 600px) {
    }
    #user-tools-section {
        img {
          zoom: 70%;
        }
      p:first-of-type{
        display:none;
      }
      }


  `
  ]
})
export class UserBarComponent implements OnInit {
  userMenu:boolean = false;
  @Input() user!:IUser;
  @Output() showTooltip = new EventEmitter<any>()
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  triggerTooltip () {
    this.showTooltip.emit(null)
  }

  logoutUser() {
    this.loginService.logout()
    //this.router.navigateByUrl('')
  }
}
