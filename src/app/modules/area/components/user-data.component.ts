import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-data',
  template: `
  <div id="area" class="ms-4  m-2 text-light active-link">
    <p>{{user.username}}</p>
    <p>{{user.email}}</p>
  </div>
  `,
  styles: [
    `
    #area {
      text-shadow: 0px 0px 17px rgba(255, 68, 128, 1);
      background: transparent;
    }
    `
  ]
})
export class UserDataComponent implements OnInit {
  public user!:IUser;
  constructor() { }

  ngOnInit(): void {
  }
}
