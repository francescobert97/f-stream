import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-data',
  template: `
  <div id="area" class="ms-4 text-light">
    <p>{{user?.username}}</p>
    <p>{{user?.email}}</p>
    <p></p>
    <p></p>
    <img>
  </div>
  `,
  styles: [
    `
    #area {
      margin: 1rem;
      width: 30rem;
      height: 90%;
      border-radius: 10px;
      text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
      background: transparent;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }
    `
  ]
})
export class UserDataComponent implements OnInit {
  public user!:IUser;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.currentUser)
  }
}
