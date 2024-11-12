import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-subsection-category',
  template: `
<div id="section-category" class="">
  <div class="d-flex justify-content-between mt-2">
    <p class="text-center ms-4 active-link">{{sectionTitle}}</p>
    <app-search-bar></app-search-bar>
  </div>

  <ng-container *ngFor="let subCategory of subCategories; let idx = index">
    <p>{{subCategory.label}}</p>

    <div class="position-relative">
      <div *appResize="{operation:'createView', conditionMode:'standard', width: 600}">
        <app-custom-button [customDataButton]="{label:'previous', classes:'position-absolute z-index-strong subsection-category-scroll-left gradient-bg p-3'}"  (callFnFromOutside)="scrollContainer('left', idx)"></app-custom-button>
        <app-custom-button  [customDataButton]="{label:'next',classes:'position-absolute z-index-strong subsection-category-scroll-right gradient-bg p-3'}" (callFnFromOutside)="scrollContainer('right', idx)"></app-custom-button>
      </div>


        <div #containerToScroll  class="d-flex title-container"  *ngIf="subCategory.films.length > 0; else noMovie">
            <ng-container *ngFor="let film of subCategory.films">
              <app-title-card  app-title-card [movie]="film" ></app-title-card>
          </ng-container>
        </div>
    </div>

    <ng-template #noMovie>
      <p class="d-flex justify-content-center">There is no movie in this section!</p>
    </ng-template>

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
    {
      label:'Favourite movies',
      films: []
    },

  ]

  constructor(private route: ActivatedRoute, private titlesService:TitlesStreamService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.sectionTitle = param.category
       this.titles = this.titlesService.getSpecificCategoryFilm(param.category)
    })
    this.filterFilms('mostWatched');
    this.filterFilms('newEntry');
    this.filterFilms('recentlySeen');
    this.filterFilms('favourite');
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
            this.generateRandomLastWatchFilm(title);

          if(title.lastWatch === 'never') return false;

          const dateOfOneWeekAgo = new Date()
          dateOfOneWeekAgo.setDate(new Date().getDate() -7)
         const lastWatch = new Date(title.lastWatch);
        return lastWatch >= dateOfOneWeekAgo? true : false;
        })
      break;
      case 'favourite':
        const currUser = this.loginService.currentUser$.getValue();
          this.subCategories[3].films = currUser.favouriteFilms;
       break;
    }

  }

  public scrollContainer(direction:string, index:number) {

   if(direction === 'right') this.containersToScroll.toArray()[index].nativeElement.scrollLeft += 300;

    if(direction === 'left') this.containersToScroll.toArray()[index].nativeElement.scrollLeft -= 300;

  }

  private generateRandomLastWatchFilm(title:IFilm) {

    if(title.id>= 300000) {
      const rndmDate = new Date()
      const dasottrarre =  Math.floor(Math.max(1, Math.random() * 7));
       rndmDate.setDate(rndmDate.getDate() - dasottrarre)
      const dateoftoday = `${rndmDate.getFullYear()}/${rndmDate.getMonth() + 1}/${rndmDate.getDate()}`
      title.lastWatch = dateoftoday
    }
  }


 }
