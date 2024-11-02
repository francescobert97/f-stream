import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IUser, USER_FALLBACK } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-bar',
  template: `

    <div id="user-tools-section" *ngIf="user.id > 0; else notlog" (click)="userMenu = !userMenu" class="d-flex align-items-center mt-sm-2 text-light active-link p-2">
        <img src="{{user.picture}}">
        <p *appResize="{operation:'createView', conditionMode:'standard'}" class="mx-4">{{user.username}}</p>
    </div>
  <div class="d-flex flex-column align-items-center gap-3 gradient-bg active-link p-2 z-index-moreover" id="user-menu" *ngIf="userMenu">
        <p *appResize="{operation:'createView', conditionMode:'reverse'}" class="mx-4">{{user.username}}</p>

        <p>email:{{user.email}}</p>
        <a href="javascript:void(0)" class="text-light" routerLink="/none"  (mouseover)="triggerTooltip()">Vedi le informazioni complete</a>
        <app-custom-button (callFnFromOutside)="logoutUser()" [customDataButton]="{label: 'Logout',classes: '',link:'/'}"></app-custom-button>
  </div>

    <ng-template #notlog>
      <p class="mt-2  col-sm-1  col-1 offset-1">Not Logged</p>
    </ng-template>
  `,
  styles: [
    `

    #user-tools-section {
      min-width: 80px;
      img {
        height: 100%;
        max-height:60px;
        width:100%;
        border-radius: 10px;
      }
      p {
        text-shadow: var(--text-shadow);
      }
    }

    #user-menu {
        position: absolute;
        width: 100%;
        max-width: 11rem;
        top: 7.2rem;
        right: 3.9rem;
        text-decoration: none;

        a {
          font-size: 0.7em;
          text-decoration: underline
        }
      }


    @media (max-width: 600px) {

    #user-tools-section {
      min-width: 60px;
          img {

          }
        p:first-of-type{
          display:none;

        }
      }
      #user-menu {
        right: 1rem;
        max-width: 8rem;
      }
    }
  `
  ]
})
export class UserBarComponent implements OnInit {
  userMenu:boolean = false;
  @Input() user:IUser = USER_FALLBACK;
  @Output() showTooltip = new EventEmitter<any>()
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  triggerTooltip () {
    this.showTooltip.emit(null)
  }

  logoutUser() {
    this.loginService.logout()
    this.userMenu = !this.userMenu;
  }
}
