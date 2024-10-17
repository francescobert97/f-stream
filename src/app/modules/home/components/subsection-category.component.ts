import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';
import { CategoriesFilmService } from '../services/categories-film.service';

@Component({
  selector: 'app-subsection-category',
  template: `
<div id="section-category">
  <div class="d-flex justify-content-between">
    <p class="text-center p-2 active-link">{{sectionTitle}}</p>
    <app-search-bar [titles]="titles"></app-search-bar>
  </div>
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
 public sectionTitle:string = '';
 public titles:IFilm[] = [];
  constructor(private route: ActivatedRoute, private categoriesService:CategoriesFilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.sectionTitle = param.category
      this.titles =  this.categoriesService.getSpecificCategoryFilm(param.category)
    })
  }

}
