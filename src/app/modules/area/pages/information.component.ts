import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { getFromLocalStorage } from 'src/app/shared/utils/localstorage';

@Component({
  selector: 'app-information',
  template: `
   <div>
      <p>{{user.username}}</p>
      <p>{{user.email}}</p>
   </div>
  `,
  styles: [
  ]
})
export class InformationComponent implements OnInit {
  public user!:IUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user =  getFromLocalStorage('currentUser') as IUser;
  }

}
