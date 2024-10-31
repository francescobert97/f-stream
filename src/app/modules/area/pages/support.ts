import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { getFromLocalStorage } from 'src/app/shared/utils/localstorage';

@Component({
  selector: 'app-support',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [
  ]
})
export class SupportComponent implements OnInit {
  user!:IUser;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser$.subscribe(user => this.user = user);
  }

}
