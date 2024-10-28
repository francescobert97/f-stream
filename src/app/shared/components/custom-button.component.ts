import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ICustomDataButton<T = unknown> {
  label: string,
  classes?: string,
  link?: string,
  method?: {fn:(...params:T[]) => T,
    params:any;
  }
}

@Component({
  selector: 'app-custom-button',
  template: `

      <button (click)="triggerFunction()" *ngIf="customDataButton.link && customDataButton.link.length > 0 else NoLink" [class]="customDataButton.classes"  class="custom-button btn  text-light" routerLink="{{customDataButton.link}}" routerLinkActive="active-link">{{customDataButton.label}}</button>

    <ng-template #NoLink>
      <button (click)="triggerFunction()" [class]="customDataButton.classes" class="custom-button btn   text-light active-link " >{{customDataButton.label}}</button>

    </ng-template>


  `,
  styles: [`
    .custom-button {
      text-shadow: 0px 0px 7px rgba(247, 72, 199, 1);
    }

    .categories-btn {
      letter-spacing:2px;
      font-size:1.5em;
    }
    .subsection-category-scroll-left {
      left:15px;
      top:35%;

    }

    .subsection-category-scroll-right {
      right: 15px;
      top:35%;
    }

    .close-video-player {
      top: 1%;
      left:1%;
      &:hover {
                transform: scale(1.1);
              }
    }

    .play-btn {
      top:40%;
      left:45%;
    }
  `]
})
export class CustomButtonComponent implements OnInit {
@Input() customDataButton:ICustomDataButton = {
  label: 'close',
  classes: '',
  link:'',
}
@Output() callFnFromOutside = new EventEmitter<unknown>();
  constructor() { }

  ngOnInit(): void {
  }
  triggerFunction () {
    this.callFnFromOutside.emit(null);
  }
}
