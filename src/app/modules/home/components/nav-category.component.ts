import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-category',
  template: `
      <div id="nav-category" class=" m-1 ">

        <app-custom-button (callFnFromOutside)="test()" [customDataButton]="{label:'Seleziona la categoria >',classes: 'p-3', link:''}"></app-custom-button>

        <div  *appResize="{operation:'let', conditionMode:'reverse',classes:'gradient-bg'}"  class="category-list rounded p-1"  [class]="showList? 'visible-list' : 'hidden-list'">
          <ng-container *ngFor="let category of categories">
            <app-custom-button [customDataButton]="{label:category.label,classes: 'p-3 categories-btn w-100 overflow-hidden', link:category.path}"></app-custom-button>
          </ng-container>
        </div>
      </div>
  `,
  styles: [
    `
    #nav-category {
      letter-spacing: 2px;
      padding: 1.5rem;

      .category-list {
        font-size:0.7em;
        text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
        position:absolute;
        display:flex;
        flex-direction: row;
        align-items: center;
        span {
          padding: 0.9rem 0.3rem;
          margin: 0 0.3rem;
        }
      }

      .hidden-list {
        left: -9999px
      }

      .visible-list {
        top: 9.8%;
        left: 15%;
        margin: 0 3.8rem;
        z-index: 9999;
        button {
          transition: 0.25s;
          &:hover {
            border-radius: 10px;
            box-shadow: var(--hover-shadow-box);
            -webkit-box-shadow:  var(--hover-shadow-box);
          }
        }
      }
    }

    #button-close-search {
      button {
        border: none;
        text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);

      }
    }

    @media (max-width: 600px) {
      #nav-category {
          font-size:0.8em;
          padding: 0.9rem;
         .category-list {
          font-size:0.7em;
          display:flex;
          flex-direction: column;
         }
         .visible-list {
          top: 20.7%;
          left: -8%;
         }
      }
      span {

      }
    }
    `
  ]
})
export class NavCategoryComponent implements OnInit {
public showList:boolean = false;

public categories = [
  { path: '/home/comedy', label: 'Commedia' },
  { path: '/home/dramatic', label: 'Drammatico' },
  { path: '/home/horror', label: 'Horror' },
  { path: '/home/action', label: 'Azione' },
  { path: '/home/sentimental', label: 'Sentimentale' },
  { path: '/home/thriller', label: 'Thriller' },
  { path: '/home/animation', label: 'Animazione' },
  { path: '/home/popular', label: 'Popolari' }
];
  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  test() {
    console.log('triggerato')
    this.showList = !this.showList
    console.log(this.showList)
  }
}
