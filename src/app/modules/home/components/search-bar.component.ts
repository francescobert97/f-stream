import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ObservableInput } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IFilm } from '../../../shared/models/film.model';
import { TitlesStreamService } from '../../../shared/services/titles-stream.service';

@Component({
  selector: 'app-search-bar',
  template: `
    <div id="search-bar" class="d-flex justify-content-between text-light mt-3 me-3">
      <input class="text-light me-3" (change)="search()" [(ngModel)]="searchTerm" type="search" placeholder="Cerca film da guardare">
      <button (click)="search()" type="button"   class="text-light">Cerca</button>
    </div>
  `,
  styles: [
    `
    #search-bar {
        border-radius: 10px;
        background: transparent;
        border: none;
        padding: 0.6rem 3rem;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px -3px rgba(180,180,250,0.4);
        input {
          background: transparent;
          border: none;
          &:focus {
            outline: none;
          }
        }

        button {
          text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
          background: transparent;
          border: none;
          font-size: 1.1em;
        }
      }

    `
  ]
})
export class SearchBarComponent implements OnInit {
  @Input() titles:IFilm[] = []
  searchTerm: String = ""
  constructor(private route: ActivatedRoute, private router:Router, private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
   /* this.route.params.subscribe(params => { 
      
      if(params.searchTerm) {
        
       this.titles.filter(film => {film.titolo.toLowerCase().includes(params.searchTerm.toLowerCase())})
        //this.titlesStream.getSearchBar()
        
      }
      
    })*/

  
  }

  search():void{
    if(this.searchTerm) {
    this.titlesStream.getSearchBar(this.titles)
    this.router.navigateByUrl('home/results/'+ this.searchTerm );
    console.log(this.searchTerm)
    }
  }
}
