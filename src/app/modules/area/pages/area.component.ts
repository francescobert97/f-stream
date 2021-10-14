import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-area',
  template: `
  <div  class="text-light d-flex mt-3">  
    <div id="user-link" class="d-flex flex-column  justify-content-evenly"> 
      <a href="javascript:void(0)">Informazioni</a>
      <a href="javascript:void(0)">Gestisci Abbonamento</a>
      <a href="javascript:void(0)">Contatta il supporto</a>
    </div>

    <div>
     <app-user-data [user]="user"></app-user-data>
    </div>
  </div> 
  `,
  styles: [
    `
    #user-link {
      width: 100%;
      min-height: 20rem;
      a {
        text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
        color: white;
        font-size: 1.5em;
        padding: 1rem;
        text-decoration: none;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
      }
    } 
    `
  ]
})
export class AreaComponent implements OnInit {
  public user!:IUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(data => {
      if(data){
        console.log(data)
        this.user = data;
      }
    })
  }

}
