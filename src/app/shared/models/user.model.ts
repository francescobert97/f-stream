import { IFilm } from "./film.model"

export interface IUser {
    picture: string,
    username:string,
    password: string,
    realname?: string,
    email: string,
    eta?: number,
    subscriptionDate:string,
    favouriteFilms: IFilm[]
    id:number
}


export class User implements IUser {

  id:number = 0
  picture: string = ''
  username:string = ''
  password: string = ''
  realname: string = ''
  email: string = ''
  eta: number = 0
  subscriptionDate:string = '0000/00/00'
  favouriteFilms: IFilm[] = []

  constructor() {
    }
}

export const USER_FALLBACK = new User();
