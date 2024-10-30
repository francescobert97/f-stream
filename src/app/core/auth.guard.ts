import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { getFromLocalStorage } from '../shared/utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router:Router) {}
  canActivate() {
    console.log(getFromLocalStorage('currentUser'))
   getFromLocalStorage('currentUser')? true : this.router.navigateByUrl('/');

  }

}
