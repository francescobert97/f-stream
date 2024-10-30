import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-registration',
  template: `
  <div id="form-registration" class=" d-flex justify-content-end align-items-center w-100 h-100">
  <app-custom-button [customDataButton]="{label:'Back to Login', link:'/login'}"></app-custom-button>
  <div>
        <h2>Tutto quello che non ti aspettavi di trovare</h2>
      </div>
      <form class="d-flex flex-column align-items-center me-4 mb-2 p-3" [formGroup]="registrationForm">
        <label for="username"> Username: </label>
        <input class="text-dark" id="username" type="text" formControlName="username">

        <label for="email">E-mail: </label>
        <input class="text-dark" id="email" type="email" formControlName="email">

        <label for="password">Password: </label>
        <input class="text-dark" id="password" type="text" formControlName="password">

        <label for="name">Nome reale: </label>
        <input class="text-dark" id="name" type="text" formControlName="realname">

        <label for="age">età: </label>
        <input class="text-dark" id="age" type="text" formControlName="eta">

        <button class="btn text-light mt-4" (click)="userRegistration()" type="button">Registrati</button>
      </form>
    </div>

  `,
  styles: [
    `
    #form-registration {
        position:absolute;
        z-index:500;
        background: url('../../../../assets/images/registrationbg.jpg');
        border-radius: 10px;
        top: 10%;
        form {
          width: 30%;
          background: url('../../../../assets/images/background.png');
          background-size: 300%;
          border-radius: 10px;
          box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
            input {
              width: 75%;
              margin: 1rem;
            }
            button {
              background: transparent;
            }
        }
      }
    `
  ]
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder,private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  registrationForm = this.fb.group({
    username: ['',  [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    realname: ['', [Validators.required]],
    eta: [''],
    }
    )

  userRegistration() {
    this.loginService.newUser({id: Math.random().toString(36).substr(2, 9), picture: '../../../../assets/icon/avatar.png',...this.registrationForm.value})
    .subscribe(data => this.loginService.userAuth2(data).subscribe(data => {
      if(data) {
        this.router.navigateByUrl('/home/commedy')
      }
    }))

  }

}
