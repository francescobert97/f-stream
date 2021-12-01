import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subscriber } from 'rxjs';
import { FILM } from 'src/app/shared/models/film-mock';
import { IFilm } from 'src/app/shared/models/film.model';
@Injectable({
  providedIn: 'root'
})
export class TitlesStreamService {
  public Film:IFilm[][] = FILM;
  public titlesSearch:IFilm[] = [];
  private observableFilm = new BehaviorSubject<IFilm[][]>(this.Film);
  public filmObs$ = this.observableFilm.asObservable()
  private titlesSearchUpdate =  new BehaviorSubject<IFilm[]>(this.titlesSearch);
  searchBar$ = this.titlesSearchUpdate.asObservable()
  constructor() { }

  getAll() {
    return this.filmObs$;
  }

  getSearchBar(titles:IFilm[]) {
     this.titlesSearch =  titles;
  }

  searchResults() {
    this.titlesSearchUpdate.next(this.titlesSearch);
   
  }

}
