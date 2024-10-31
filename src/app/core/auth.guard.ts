import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { getFromLocalStorage } from '../shared/utils/localstorage';
import { LoginService } from '../shared/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router:Router, private loginService:LoginService) {}
  canActivate() {
   const isAuthenticated = this.loginService.currentUser$.getValue();
   return isAuthenticated.id? true : false
  }

}
