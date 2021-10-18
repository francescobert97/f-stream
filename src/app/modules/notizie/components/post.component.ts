import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../services/posts.service';

@Component({
  selector: 'app-post',
  template: `
  <div id="post-card" class="d-flex flex-column justify-content-between" *ngFor="let post of posts">
    <h2 class="">{{post.title}}</h2>
    <p class="align-self-start">{{post.text}}</p>
    <div>
      <span>{{post.author}}</span> <span>{{post.date}}</span>
    </div>
  </div>
  `,
  styles: [
    `
    #post-card {
      min-height: 20rem;
      margin: 1rem;
      padding: 1rem;
      border-radius: 10px;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
    }
    `
  ]
})
export class PostComponent implements OnInit {
  @Input() posts:IPosts[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
