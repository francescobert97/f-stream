import { Component, Input, OnInit } from '@angular/core';

export interface ICustomDataButton {
  label: string,
  classes?: string,
  link: string
}

@Component({
  selector: 'app-custom-button',
  template: `

      <button *ngIf="customDataButton.link.length > 0 else NoLink" [class]="customDataButton.classes"  class="custom-button btn bg-none  text-light active-link " routerLink="{{customDataButton.link}}" routerLinkActive="active-link">{{customDataButton.label}}</button>

    <ng-template #NoLink>
      <button  [class]="customDataButton.classes" class="custom-button btn bg-none  text-light active-link " >{{customDataButton.label}}</button>

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
  `]
})
export class CustomButtonComponent implements OnInit {
@Input() customDataButton:ICustomDataButton = {
  label: 'close',
  classes: '',
  link:''
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.customDataButton)
  }

}
