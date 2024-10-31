import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FILMS } from 'src/app/shared/models/film-mock';
import { IFilm, MOVIE_FALLBACK } from 'src/app/shared/models/film.model';
import { ICategory } from '../models/category.model';
export type FilmCategories = 'comedy' | 'action' | 'animation' | 'dramatic' | 'horror' | 'popular' | 'sentimental'| 'thriller';

@Injectable({
  providedIn: 'root'
})
export class TitlesStreamService {
  public categorizedfilms:ICategory = FILMS;
  public nonCategorizedFilms = Object.values(this.categorizedfilms).flat(1);

  private titlesSearchUpdate =  new BehaviorSubject<IFilm[]>(this.nonCategorizedFilms);
  public searchBar$:Observable<IFilm[]> = this.titlesSearchUpdate.asObservable();

  constructor() { }

  public getSpecificCategoryFilm(category:FilmCategories):IFilm[] {
    return this.categorizedfilms[category]
  }
  getSearchBar(filmtoLookUp:string):void {
    const results =  this.nonCategorizedFilms.filter(film => film.titolo.toLowerCase().includes(filmtoLookUp.toLowerCase()));
    this.titlesSearchUpdate.next(results);
  }
  updateFilm(filmToUpdate:IFilm):void {
     this.nonCategorizedFilms.map(film => {
      film.id === filmToUpdate.id ? filmToUpdate : film;
    })
  }

  getFilm<T extends Pick<IFilm, 'id' | 'genere'>>(movie:T):IFilm {
      const foundMovie = this.nonCategorizedFilms.find(mov => mov.id === movie.id);
     return foundMovie?.id? foundMovie : MOVIE_FALLBACK;
  }
}
