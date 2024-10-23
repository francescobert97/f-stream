import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ObservableInput } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IFilm } from '../../../shared/models/film.model';
import { TitlesStreamService } from '../../../shared/services/titles-stream.service';

@Component({
  selector: 'app-search-bar',
  template: `
    <div id="search-bar" class="d-flex justify-content-between text-light ">
      <input class="text-light me-3 bg-none" (change)="search()" [(ngModel)]="searchTerm" type="search" placeholder="Cerca film da guardare">
      <button (click)="search()" type="button" class="text-light bg-none">Cerca</button>
    </div>
  `,
  styles: [
    `
    #search-bar {
        border-radius: 10px;
        border: none;
        padding: 0.6rem 3rem;
        -webkit-box-shadow:  var(--hover-shadow-box-soft);
        box-shadow: var(--hover-shadow-box-soft);
        input {
          border: none;
          &:focus {
            outline: none;
          }
        }

        button {
          text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
          border: none;
          font-size: 1.1em;
        }
      }


    @media (max-width: 600px) {
      #search-bar {
        padding: 8px 1.5rem;
        button {
          font-size:1.5em;
        }
      }
    }
    `
  ]
})
export class SearchBarComponent implements OnInit {
  @Input() titles:IFilm[] = []
  public searchTerm: String = ""
  constructor(private route: ActivatedRoute, private router:Router, private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
  }

  search():void{
    if(this.searchTerm) {
    this.titlesStream.getSearchBar(this.titles)
    this.router.navigateByUrl('home/results/'+ this.searchTerm );
    }
  }
}
