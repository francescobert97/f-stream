import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-area',
  template: `
  <div  class="text-light d-flex justify-content-evenly mt-3">
    <div id="user-link" class="d-flex flex-column justify-content-start gap-5">

      <app-custom-button [customDataButton]="{label:'Informazioni',classes: 'p-3 categories-btn w-100 active-link', link:''}"></app-custom-button>
      <app-custom-button [customDataButton]="{label:'Gestisci Abbonamento',classes: 'p-3 categories-btn w-100 active-link', link:''}"></app-custom-button>
      <app-custom-button [customDataButton]="{label:'Contatta il supporto',classes: 'p-3 categories-btn w-100 active-link', link:''}"></app-custom-button>

    </div>

    <div>
      <app-user-data></app-user-data>
    </div>
  </div>
  `,
  styles: [
    `
    #user-link {
      width: 100%;
      min-height: 80vh;
      a {
        margin: 1rem;
        text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
        color: white;
        font-size: 1.5em;
        padding: 1rem;
        text-decoration: none;
      }
    }
    `
  ]
})
export class AreaComponent implements OnInit {
  public user!:IUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
   /* this.loginService.currentUser.subscribe(data => {
      if(data){
        console.log(data)
        this.user = data;
      }
    })*/
  }

}
