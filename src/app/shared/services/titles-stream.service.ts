import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FILMS } from 'src/app/shared/models/film-mock';
import { IFilm } from 'src/app/shared/models/film.model';
@Injectable({
  providedIn: 'root'
})
export class TitlesStreamService {
  public Films:IFilm[] = [...FILMS.comedy, ...FILMS.action, ...FILMS.animation, ...FILMS.dramatic, ...FILMS.horror,...FILMS.popular, ...FILMS.sentimental, ...FILMS.thriller];
  private observableFilm = new BehaviorSubject<IFilm[]>(this.Films);
  public filmObs$ = this.observableFilm.asObservable();
  private titlesSearchUpdate =  new BehaviorSubject<IFilm[]>(this.Films);
  searchBar$ = this.titlesSearchUpdate.asObservable();
  constructor() { }

  getAll() {
    return this.filmObs$;
  }

  getSearchBar(filmtoLookUp:string) {
    const results =  this.Films.filter(film => film.titolo.toLowerCase().includes(filmtoLookUp));
    console.log(results)
    this.titlesSearchUpdate.next(results);
  }
  updateFilm(filmToUpdate:IFilm) {
    this.Films.map(film => {
      film.id === filmToUpdate.id ? filmToUpdate : film
    })
  }
}
