
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, Subject} from 'rxjs';
import { tap,filter,find, map, switchMap} from 'rxjs/operators'
import { ILogin } from 'src/app/shared/models/login.model';
import { IUser } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  confirmAccessAuth:boolean = false;
  public loginData!: IUser;
  currentUser = new BehaviorSubject<IUser>(this.loginData);
  constructor(private httpClient: HttpClient) { }

  newUser(user:IUser):Observable<IUser> {
    return this.httpClient.post<IUser>('http://localhost:3000/user', user).pipe(
      tap(data => data)
    )
    
  }

  userAuth2 (user:ILogin):Observable<IUser>{ 
    return this.httpClient.get<IUser[]>('http://localhost:3000/user').pipe(
    switchMap(users => users),
    filter(users => users.username === user.username && users.password === user.password),
    tap(user => { 
      if(user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      this.currentUser.next(user);
      }else {
        console.log('dati errati')
      }
    })
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser.next(this.loginData);
  }
}
