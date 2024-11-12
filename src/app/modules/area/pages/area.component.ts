import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div  class="area mt-3">
    <div class="d-flex justify-content-around">
      <ng-container *ngFor="let userAreaButton of userAreaButtons">
        <app-custom-button [customDataButton]="{label:userAreaButton.label,classes: 'p-3 categories-btn', link:userAreaButton.link}"></app-custom-button>
      </ng-container>
    </div>
      <router-outlet></router-outlet>
  </div>
  `,
  styles: [
    `
    .area {

    }


    @media  (max-width: 600px) {
    .area {
      font-size: 0.5em;
    }
    }
    `
  ]
})
export class AreaComponent implements OnInit {
  public userAreaButtons = [
    { label: 'Informazioni', link: '/area/information' },
    { label: 'Gestisci Abbonamento', link: '/area/subscription' },
    { label: 'Contatta il supporto', link: '/area/support' }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
