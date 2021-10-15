import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-nav-category',
  template: `
  <div  class="w-100 d-flex justify-content-between align-items-center">
      <div id="nav-category" (click)="showList = !showList" class="  p-4">
        <span >Seleziona la categoria ></span>

        <div class="category-list"  [class]="showList? 'visible-list' : 'hidden-list' ">
          <span>Tutti i generi</span>
          <span routerLink="/home/commedia" routerLinkActive="active-link">Commedia</span>
          <span routerLink="/home/drammatico" routerLinkActive="active-link">Drammatico</span>
          <span routerLink="/home/horror" routerLinkActive="active-link">Horror</span>
          <span routerLink="/home/azione" routerLinkActive="active-link">Azione</span>
          <span routerLink="/home/sentimentale" routerLinkActive="active-link">Sentimentale</span>
          <span routerLink="/home/thriller" routerLinkActive="active-link">Thriller</span>
          <span routerLink="/home/animazione" routerLinkActive="active-link">Animazione</span>
          <span routerLink="/home/popolari" routerLinkActive="active-link">Popolari</span>
        </div>
      </div>
      <div id="button-close-search" *ngIf="closeSearchButton.length > 0"> 
        <button class="px-3 py-2 me-4 text-light" (click)="cleanDataSearch()" routerLink="/home/commedia">Torna ai titoli.</button>
      </div>
  </div>  
  `,
  styles: [
    `
    #nav-category {
      margin: 1.5rem 0.8rem;
      text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
      font-size: 1.2em;
      letter-spacing: 2px;
      &:hover {
        border-radius: 10px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px -3px rgba(180,180,250,0.4);
      }
      span  {
        cursor: pointer;
      }
      .category-list {
        position: absolute; 
        transition: 0.1s;
        top: 17.7%;
        font-size: 0.5em;
        span {
          padding: 0.9rem 0.3rem;
          margin: 0 0.3rem;
        }
      }

      .hidden-list {
        left: -9999px
      }
    
      .visible-list {
        left: 18.5%;
        margin: 0 3.8rem;
        span {
          transition: 0.5s;
          &:hover {
            border-radius: 10px;
            -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
            box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px -3px rgba(180,180,250,0.4);
          }
        }
      }
    }

    #button-close-search {
      button {
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
            box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px -3px rgba(180,180,250,0.4);
        border-radius: 10px;
        border: none;
        background: transparent;
        text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);

      }
    }
    `
  ]
})
export class NavCategoryComponent implements OnInit {
public showList = false;
public showLink = false;
public closeSearchButton:IFilm[] = [];
  constructor(private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
  this.titlesStream.searchBar$.subscribe(data => this.closeSearchButton = data)
  }

  cleanDataSearch() {
    this.closeSearchButton = [];
  }

}
