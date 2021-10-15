import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-data',
  template: `
  <div id="area" class="text-light">
    <p>{{user?.username}}</p>
    <p>{{user?.email}}</p>
    <p></p>
    <p></p>
    <img>
  </div>
  `,
  styles: [
  ]
})
export class UserDataComponent implements OnInit {
  public user!:IUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(data => {
      if(data){
        this.user = data;
      }
    })
  }
}
