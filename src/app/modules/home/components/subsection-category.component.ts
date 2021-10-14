import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-subsection-category',
  template: `
<div id="section-category">
  <p class="text-center p-2 active-link">{{sectionTitle}}</p>
  <div>
    <p>Visti di recente</p>
    <div>
      <app-title-card [titles]="titles" ></app-title-card>
    </div>
  </div>

  <div>
    <p>Più visti</p>
    <div>
      <app-title-card [titles]="titles" ></app-title-card>
    </div>
  </div>

  <div>
    <p>Nuove uscite</p>
    <div>
      <app-title-card [titles]="titles" ></app-title-card>
    </div>  
  </div>
</div>
  `,
  styles: [
    `
    #section-category {
      p {
        width: 25%;
        text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
        margin: 1rem 2rem;
        font-size: 2em;
      }
    }
    `
  ]
})
export class SubsectionCategoryComponent implements OnInit {
@Input() sectionTitle:string = '';
@Input() titles:IFilm[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
