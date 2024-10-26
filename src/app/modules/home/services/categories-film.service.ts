
import { Injectable } from '@angular/core';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';
import { FILMS } from 'src/app/shared/models/film-mock';
import { ICategory } from 'src/app/shared/models/category.model';
import { IFilm } from 'src/app/shared/models/film.model';
export type FilmCategories = 'comedy' | 'action' | 'animation' | 'dramatic' | 'horror' | 'popular' | 'sentimental'| 'thriller';


@Injectable({
  providedIn: 'root'
})
export class CategoriesFilmService {
  public films:ICategory = FILMS;

  constructor() { }

  public getSpecificCategoryFilm(category:FilmCategories):IFilm[] {
    return this.films[category]
  }
  }

