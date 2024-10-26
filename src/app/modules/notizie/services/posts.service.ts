import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';


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
  baseUrl:string = 'https://jsonplaceholder.typicode.com'
  noPosts:number = 10
  constructor(private httpClient: HttpClient) { }

  getPosts():Observable<any[]> {
    const rndmNumber = (nmb:number, minValue:number=0) => Math.floor(Math.max(minValue, Math.random() * nmb));
    const mockDate = new Date();
    mockDate.setDate(mockDate.getDay() - rndmNumber(30))
   return this.httpClient.get<any>(`${this.baseUrl}/posts`).pipe(
    map(posts => posts.map((post:any) => {
      mockDate.setDate(mockDate.getDay() - rndmNumber(30))
    return  {...post, author: 'Admin', date: mockDate }
  }))

   )
  }
}
