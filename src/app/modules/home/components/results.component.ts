import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-results',
  template: `
  <div id="results" class="w-100 d-flex flex-column align-items-center p-5" >
    <div *ngIf="resultsSearch.length > 0; else noResults">
      <app-title-card [titles]="resultsSearch"></app-title-card>
    </div>

    <app-custom-button class="" [customDataButton]="{label: 'Torna ai titoli',classes: '', link:''}" routerLink="/home/commedia/comedy"></app-custom-button>


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
  public resultsSearch:IFilm[] = [];
  constructor(private route: ActivatedRoute, private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      if(params.searchTerm) {
       this.titlesStream.searchResults()
       this.titlesStream.searchBar$.subscribe(data => this.titlesSearch = data)
       this.resultsSearch = this.titlesSearch.filter(film => film.titolo.toLowerCase().includes(params.searchTerm.toLowerCase()))
      }

    })
  }

}
