import { FilmCategories } from "../services/titles-stream.service"

export interface IFilm {
    id: number,
    urlCopertina: string,
    titolo: string,
    descrizione: string,
    anno: string,
    durata: string,
    genere: FilmCategories,
    eta: string,
    urlStream: string,
    numberOfStream: number,
    lastWatch: 'never' | string,
    likes: number
}


export class Movie implements IFilm {

  id:number = 0
  urlCopertina:string = ''
  titolo:string= ''
  descrizione:string = ''
  anno:string= ''
  durata:string= ''
  genere:FilmCategories= 'comedy'
  eta:string = ''
  urlStream:string = ''
  numberOfStream:number = 0
  lastWatch:string = 'never'
  likes:number= 0
  constructor() {
    }
}

export const MOVIE_FALLBACK = new Movie();
