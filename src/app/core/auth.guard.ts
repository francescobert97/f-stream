import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.model';
import { LoginService } from '../shared/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  login!:IUser;

  constructor(private router:Router, private loginService:LoginService) {}
  canActivate(): boolean {
    if(localStorage.currentUser) {
      return true
    }else {
      return false
    }
  }

}

//CanActivateChild, CanDeactivate<unknown>, CanLoad
