import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
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
  constructor() { }

  ngOnInit(): void {
    this.user =  getFromLocalStorage('currentUser') as IUser;
  }

}
