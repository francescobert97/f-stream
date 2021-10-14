
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, Subject} from 'rxjs';
import { tap,filter,find, map, switchMap} from 'rxjs/operators'
import { ILogin } from 'src/app/shared/models/login.model';
import { IUser } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData!:ILogin;

  currentUser = new Subject<IUser>();
  constructor(private httpClient: HttpClient) { }

  userAuth2 (user:ILogin):Observable<IUser>{ 
    return this.httpClient.get<IUser[]>('http://localhost:3000/user').pipe(
    switchMap(users => users),
    filter(users => users.username === user.username && users.password === user.password ),
    tap(user => this.currentUser.next(user))
    )
  }

}
