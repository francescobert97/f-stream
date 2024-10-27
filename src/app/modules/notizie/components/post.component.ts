import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../services/posts.service';

@Component({
  selector: 'app-post',
  template: `
  <div id="post-card" class="d-flex flex-column justify-content-between active-link" *ngFor="let post of posts">
  <h2 class="">{{post.title}}</h2>
    <p class="align-self-start">{{post.body}}</p>
    <div>
      <span>{{post.author}}</span>,
      <span>{{post.date | date}}</span>
    </div>
  </div>
  `,
  styles: [
    `
    #post-card {
      min-height: 20rem;
      margin: 1rem;
      padding: 1rem;
    }
    `
  ]
})
export class PostComponent implements OnInit {
  @Input() posts:any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
