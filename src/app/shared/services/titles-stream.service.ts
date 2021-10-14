import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subscriber } from 'rxjs';
import { FILM } from 'src/app/shared/models/film-mock';
import { IFilm } from 'src/app/shared/models/film.model';
@Injectable({
  providedIn: 'root'
})
export class TitlesStreamService {
public Film:IFilm[][] = FILM;
public observableFilm = new BehaviorSubject<IFilm[][]>(this.Film);

  constructor() { }

  getAll() {
    return this.observableFilm;
  }

  getTitleCategory() {
    
  }
}
