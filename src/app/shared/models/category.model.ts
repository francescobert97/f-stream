import { IFilm } from "./film.model";

export interface ICategory {
  comedy: IFilm[],
  action: IFilm[],
  animation:IFilm[],
  dramatic:IFilm[],
  horror:IFilm[],
  popular:IFilm[],
  sentimental:IFilm[],
  thriller: IFilm[]
}
