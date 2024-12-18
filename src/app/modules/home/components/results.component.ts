import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-results',
  template: `
  <div id="results" class="w-100 d-flex flex-column align-items-center p-5" >
    <div *ngIf="titlesSearch.length > 0; else noResults">
      <ng-container *ngFor="let title of titlesSearch">
        <app-title-card [movie]="title"></app-title-card>
      </ng-container>
    </div>

    <app-custom-button [customDataButton]="{label: 'Torna ai titoli',classes: '', link:'/home/comedy'}" ></app-custom-button>


  </div>

  <ng-template #noResults>
    <p>Il titolo che stai cercando non è disponibile.</p>
  <ng-template>
>
  >

  `,
  styles: [
    `
    #results {

    }
    `
  ]
})
export class ResultsComponent implements OnInit {
  public titlesSearch:IFilm[] = [];
  constructor( private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
       this.titlesStream.searchBar$.subscribe(data =>this.titlesSearch = data)
  }

}
