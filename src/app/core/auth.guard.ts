import { Injectable } from '@angular/core';
import { getFromLocalStorage } from '../shared/utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor() {}
  canActivate(): boolean {
  return getFromLocalStorage('currentUser')? true : false;
  }

}

//CanActivateChild, CanDeactivate<unknown>, CanLoad
