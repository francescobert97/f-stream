import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface IPosts {
  id: number,
  title: string,
  text: string,
  author: string,
  date: string
}


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts!: IPosts;

  constructor(private httpClient: HttpClient) { }

  getPosts():Observable<IPosts[]> {
   return this.httpClient.get<IPosts[]>('http://localhost:3000/posts')
  }
}
