
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { tap,filter,find, map, switchMap} from 'rxjs/operators'
import { ILogin } from 'src/app/shared/models/login.model';
import { IUser } from 'src/app/shared/models/user.model';
import { saveTolocalStorage } from '../utils/localstorage';

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

  userAuth2 (user:Pick<IUser, 'id' | 'username' | 'password'>):Observable<IUser>{
    const guestUser = {id: 0, username:'guest', picture: '../../../assets/sasuke.jpeg', email: 'no-mail', subscriptionDate: 'not-given'}
    return user.id?
     this.httpClient.get<IUser[]>('http://localhost:3000/user').pipe(
    switchMap(users => users),
    //filter(users => users.username === user.username && users.password === user.password),
    tap(users => {
      localStorage.setItem('currentUser', JSON.stringify({username:user.username, password:user.password}))
      this.currentUser.next({id: user.id, username:user.username, password:user.password, picture: '../../../assets/sasuke.jpeg', email: 'admin-test@gmail.com', subscriptionDate: '2022/04/10'});
      /*if(user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      this.currentUser.next(user);
      }else {
        console.log('dati errati')
      }*/
    })
    ) :
    of(guestUser).pipe(
    tap((guestData:any) =>{
    saveTolocalStorage('currentUser', guestData)
    console.log('nexting')
      this.currentUser.next(guestData);


     })
  )
}

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser.next(this.loginData);
  }
}
