import { Component, OnInit } from '@angular/core';
import { IPosts, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-notizie',
  template: `
  <div>
    <app-post [posts]="posts"></app-post>
  </div>
  `,
  styles: [
    `
    `
  ]
})
export class NotizieComponent implements OnInit {
  public posts:IPosts[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => this.posts = data)
  }

}
