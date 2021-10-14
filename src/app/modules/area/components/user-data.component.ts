import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-data',
  template: `
  <div class="text-light">
    <p>{{user?.username}}</p>
    <p></p>
    <p></p>
    <p></p>
    <img>
  </div>
  `,
  styles: [
  ]
})
export class UserDataComponent implements OnInit {
@Input() user!:IUser;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.user)
  }

}
