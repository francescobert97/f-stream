import { getFromLocalStorage, removeFromLocalStorage, saveTolocalStorage } from './../../../shared/utils/localstorage';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFilm, MOVIE_FALLBACK } from 'src/app/shared/models/film.model';
import { IUser, USER_FALLBACK } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';


@Component({
  selector: 'app-player-container',
  template: `
          <div class="w-100  p-3 movie-information">
            <app-custom-button (callFnFromOutside)="cleanLocalStorage()"  [customDataButton]="{label:'Back', classes:'', link:'/home/' + movie.genere}" ></app-custom-button>
            <h1 class="col-sm-6 offset-md-2 p-4 col-12">{{this.movie.titolo | uppercase}}</h1>
              <div class="col-12 bg-light text-dark col-sm-10 offset-md-1 active-link overflow-hidden position-relative">
                  <img src={{this.movie.urlCopertina}} alt="img copertina" style="height: clamp(400px, 500px, 600px ); width: 100%; ">
                  <app-custom-button (callFnFromOutside)="showPlayer = !showPlayer" [customDataButton]="{label:'PLAY', classes:'position-absolute play-btn gradient-bg p-4'}" ></app-custom-button>

                </div>
              <p class="col-sm-2 offset-md-2 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta eum voluptas ad placeat! Perspiciatis, incidunt id! A, similique et animi, fuga molestiae molestias fugiat totam sed provident in natus.</p>
              <app-user-interaction-tools [movie]="movie" [user]="user"></app-user-interaction-tools>
            </div>

            <div *ngIf="showPlayer" id="shadow-screen" class="z-index-strong row">
              <app-video-player (closeVideoplayer)="showPlayer = !showPlayer" [movie]="movie"></app-video-player>
            </div>
  `,
  styles: [
  `
          .movie-information {
            text-shadow: var(--text-shadow);
            h1 {
              letter-spacing: 2px;
            }
          }
          #shadow-screen {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.47);
          }
  `
  ]
})
export class PlayerContainerComponent implements OnInit, OnDestroy {
  showPlayer:boolean = false;
  movie:IFilm = MOVIE_FALLBACK;
  user!:IUser;
  filmSubs!:Subscription;
  constructor(private route:ActivatedRoute, private titlesStream:TitlesStreamService, private loginService: LoginService) {}

  ngOnInit(): void {
    const currentFilm:IFilm = getFromLocalStorage('currentMovieWatched') as IFilm;

    currentFilm? this.movie = currentFilm : this.filmSubs = this.route.queryParams.subscribe(<T extends Pick<IFilm, 'id' | 'genere'>>(param:Params) =>  this.movie = this.titlesStream.getFilm({id:Number(param.id), genere:param.genere} as T))
    this.loginService.currentUser$.subscribe(user => this.user = user)

  }

  @HostListener('window:beforeunload', ['$event'])
  pushMovieUpdates() {
    this.loginService.currentUser$.next(this.user)
    saveTolocalStorage('currentUser', this.user)
    this.titlesStream.updateFilm(this.movie)
  }
  cleanLocalStorage(){
    removeFromLocalStorage('currentMovieWatched')
  }
  ngOnDestroy(): void {
    this.loginService.currentUser$.next(this.user)
    saveTolocalStorage('currentUser', this.user)
    this.titlesStream.updateFilm(this.movie)
    this.cleanLocalStorage()
    this.filmSubs? this.filmSubs.unsubscribe() : null;
  }
}
