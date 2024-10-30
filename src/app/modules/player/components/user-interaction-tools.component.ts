import { IUser } from './../../../shared/models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { IFilm, MOVIE_FALLBACK } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-user-interaction-tools',
  template: `
            <div class="offset-1 d-flex gap-3">
                <app-custom-button (callFnFromOutside)="addLikeToMovie('favourite')" [customDataButton]="{label:userTools.favourite.label, classes:' p-4'}" ></app-custom-button>
                <app-custom-button  (callFnFromOutside)="addLikeToMovie('rating')" [customDataButton]="{label: userTools.rating.label, classes:'p-4'}" ></app-custom-button>
              </div>
  `,
  styles: [
  ]
})
export class UserInteractionToolsComponent implements OnInit {
  @Input() movie:IFilm = MOVIE_FALLBACK;
  @Input() user!:IUser;
  userTools:any = {
    rating:{isSwitched:false, label: 'add' },
    favourite:{isSwitched:false, label:'add'}
  };
  constructor() { }

  ngOnInit(): void {
  }
  addLikeToMovie( operation: string) {
    if(operation === 'rating') this.userTools.rating.isSwitched?
      (this.movie.likes -= 1, this.userTools.rating.label = 'add', this.userTools.rating.isSwitched = false)
       :
      (this.movie.likes += 1,this.userTools.rating.label = 'remove' , this.userTools.rating.isSwitched = true);

    else this.userTools.favourite.isSwitched?
      (this.userTools.favourite = {label:'add', isSwitched:false}, this.setFavouriteFilms('delete'))
      :
       (this.userTools.favourite = {label:'remove', isSwitched:true},this.setFavouriteFilms('set'));
  }

  private setFavouriteFilms (operation:'set' | 'delete') {
    const  favouriteFilmsUserMap =  new Map(this.user.favouriteFilms.map(data => [data.id, {...data}]));

  operation === 'set'?
    favouriteFilmsUserMap[operation](this.movie.id, this.movie) : favouriteFilmsUserMap[operation](this.movie.id)

    this.user.favouriteFilms = Array.from(favouriteFilmsUserMap.values());

  }
}
