import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';
import { CategoriesFilmService } from '../services/categories-film.service';

@Component({
  selector: 'app-subsection-category',
  template: `
<div id="section-category" class="mt-2 ">
  <div class="d-flex justify-content-between  gap-3">
    <p class="text-center  active-link">{{sectionTitle}}</p>
    <app-search-bar [titles]="titles"></app-search-bar>
  </div>

  <ng-container *ngFor="let subCategory of subCategories; let idx = index">
    <p>{{subCategory.label}}</p>

    <div class="position-relative">
      <div *appResize="'standard'">
        <app-custom-button [customDataButton]="{label:'previous', classes:'position-absolute z-index-strong subsection-category-scroll-left gradient-bg p-3'}"  (callFnFromOutside)="scrollContainer('left', idx)"></app-custom-button>
        <app-custom-button  [customDataButton]="{label:'next',classes:'position-absolute z-index-strong subsection-category-scroll-right gradient-bg p-3'}" (callFnFromOutside)="scrollContainer('right', idx)"></app-custom-button>
      </div>


        <div #containerToScroll  class="d-flex title-container">
            <ng-container *ngFor="let film of subCategory.films">
            <app-title-card [movie]="film" ></app-title-card>
          </ng-container>
        </div>
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
      .title-container  {
        overflow-x: scroll;
        scrollbar-width:none;
      }
      .title-container::-webkit-scrollbar {
        display:none;
      }
    }
    @media (max-width: 600px) {
      #section-category {
        font-size: 0.6em;
        .title-container {
        }
      }
    }
    `
  ]
})
export class SubsectionCategoryComponent implements OnInit {
  @ViewChildren('containerToScroll') containersToScroll!: QueryList<ElementRef>;
 public sectionTitle:string = '';
 public titles:IFilm[] = [];
 public areVisible:boolean = true;
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
  }

  filterFilms ( filterType:string){
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

          if(title.id >= 300000) {
              const rndmDate = new Date()
              const dasottrarre =  Math.floor(Math.max(1, Math.random() * 7));
               rndmDate.setDate(rndmDate.getDate() - dasottrarre)
              const dateoftoday = `${rndmDate.getFullYear()}/${rndmDate.getMonth() + 1}/${rndmDate.getDate()}`
              title.lastWatch = dateoftoday
          }
          if(title.lastWatch === 'never') return false;

          const dateOfOneWeekAgo = new Date()
          dateOfOneWeekAgo.setDate(new Date().getDate() -7)
         const lastWatch = new Date(title.lastWatch);
        return lastWatch >= dateOfOneWeekAgo? true : false;
        })
      break;
    }
    const currentYear = new Date().getFullYear()
    this.subCategories[2].films = this.titles.filter(title => Number(title.anno) === currentYear);
  }

  public scrollContainer(direction:string, index:number) {
    console.log(index)
    console.log(this.containersToScroll.toArray()[index].nativeElement)
   if(direction === 'right') this.containersToScroll.toArray()[index].nativeElement.scrollLeft += 300;

    if(direction === 'left') this.containersToScroll.toArray()[index].nativeElement.scrollLeft -= 300;

  }


 }
