
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { tap} from 'rxjs/operators'
import { IUser } from 'src/app/shared/models/user.model';
import { getFromLocalStorage, saveTolocalStorage } from '../utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser$ = new Subject<IUser>();
  constructor(private httpClient: HttpClient) { }

  newUser(user:IUser):Observable<IUser> {
    return this.httpClient.post<IUser>('http://localhost:3000/user', user).pipe(
      tap(data => data)
    )

  }

  userAuth2 (user:Pick<IUser, 'id' | 'username' | 'password'>):Observable<IUser>{
    const guestUser = {id: 1, username:'guest', picture: '../../../assets/sasuke.jpeg', email: 'no-mail', subscriptionDate: 'not-given',  favouriteFilms: []}
    return user.id?
     this.httpClient.get<IUser[]>('http://localhost:3000/user').pipe(
      tap(users => {
        const userLogged = {id: user.id, username:user.username, password:user.password, picture: '../../../assets/sasuke.jpeg', email: 'admin-test@gmail.com', subscriptionDate: '2022/04/10', favouriteFilms: []}
        saveTolocalStorage('currentUser',  JSON.stringify(userLogged))

      })
      ) :
      of(guestUser).pipe(
        tap((guestData:any) =>{
        saveTolocalStorage('currentUser', guestData);
      })
  )
}

getUpdatedUser() {
  const userLogged = getFromLocalStorage('currentUser') as IUser
//  this.currentUser$.next(userLogged)
}

updateUser(user:IUser) {
  saveTolocalStorage('currentUser', user);
//  const userLogged = getFromLocalStorage('currentUser') as IUser

}
  logout() {
    localStorage.removeItem('currentUser');
  }
}
