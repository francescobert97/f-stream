import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';
import { CategoriesFilmService } from '../services/categories-film.service';

@Component({
  selector: 'app-subsection-category',
  template: `
<div id="section-category" class="mt-2">
  <div class="d-flex justify-content-between  gap-3">
    <p class="text-center  active-link">{{sectionTitle}}</p>
    <app-search-bar [titles]="titles"></app-search-bar>
  </div>

  <ng-container *ngFor="let subCategory of subCategories">
    <p>{{subCategory.label}}</p>
    <div>
      <app-title-card [titles]="subCategory.films" ></app-title-card>
    </div>
  </ng-container>


</div>
  `,
  styles: [
    `
    #section-category {
      p {
        text-shadow:var(--text-shadow);
        font-size: 2em;
        padding: 0.3rem 1rem;

      }
    }
    @media (max-width: 600px) {
      #section-category {
        font-size: 0.6em;
        div+p {
          margin: 0 1rem;
        }
      }
    }
    `
  ]
})
export class SubsectionCategoryComponent implements OnInit {
 public sectionTitle:string = '';
 public titles:IFilm[] = [];
  subCategories:any = [
     {
      label: 'Visti di recente',
      films: []
    },
   {
      label: 'Più visti',
      films: []
    },
    {
      label:'Nuove uscite',
      films: []
    },

  ]

  constructor(private route: ActivatedRoute, private categoriesService:CategoriesFilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.sectionTitle = param.category
       this.titles = this.categoriesService.getSpecificCategoryFilm(param.category)
      this.subCategories[0].films = this.categoriesService.getSpecificCategoryFilm(param.category)
      this.subCategories[1].films = this.categoriesService.getSpecificCategoryFilm(param.category)

    })
    this.filterFilms(this.titles);
    console.log(this.subCategories)

  }

  filterFilms (categoryFilms?:IFilm[]){
    const currentYear = new Date().getFullYear()
    this.subCategories[2].films = this.titles.filter(title => Number(title.anno) === currentYear);
  }
}
