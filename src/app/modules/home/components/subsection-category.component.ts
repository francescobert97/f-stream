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
    <ng-container *ngFor="let film of subCategory.films">
      <app-title-card [title]="film" ></app-title-card>
    </ng-container>

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
    })
    this.filterFilms('mostWatched');
    this.filterFilms('newEntry');
    this.filterFilms('recentlySeen');
    console.log(this.subCategories)

  }

  filterFilms ( filterType:string){
    console.log('in esecuzione')
    switch(filterType) {
      case 'mostWatched':
        this.subCategories[1].films = this.titles.filter(title => title.numberOfStream >= 3000)
      break;
      case 'newEntry':
        const currentYear = new Date().getFullYear()
        this.subCategories[2].films = this.titles.filter(title => Number(title.anno) === currentYear);
      break;
      case 'recentlySeen':

        this.subCategories[0].films = this.titles.filter(title => {

          //if(title.lastWatch === 'never') return false;
          if(title.id >= 500000) {
              const rndmDate = new Date()
              const dasottrarre =  Math.floor(Math.random() * 7);
               rndmDate.setDate(rndmDate.getDate() - dasottrarre)
              const dateoftoday = `${rndmDate.getFullYear()}/${rndmDate.getMonth() + 1}/${rndmDate.getDay()}`
              console.log(dateoftoday)

              title.lastWatch = dateoftoday
          }
          const dateOfOneWeekAgo = new Date()
          dateOfOneWeekAgo.setDate(new Date().getDate() -7)
          console.log(dateOfOneWeekAgo)
         const lastWatch = new Date(title.lastWatch);
         console.log(lastWatch)
          //terminare di convertire stringa lastwatch in data per il confronto
          return title.lastWatch
        } )
      break;
    }
    const currentYear = new Date().getFullYear()
    this.subCategories[2].films = this.titles.filter(title => Number(title.anno) === currentYear);
  }
}
