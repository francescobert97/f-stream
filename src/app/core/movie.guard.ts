import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.model';
import { LoginService } from '../shared/services/login.service';
import { IFilm } from '../shared/models/film.model';
import { TitlesStreamService } from '../shared/services/titles-stream.service';
import { getFromLocalStorage } from '../shared/utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class MovieGuard  {
  constructor() {}
  canActivate(): boolean {

    const currentMovie =  getFromLocalStorage('currentMovieWatched')
     return currentMovie? true : false;
  }

}
