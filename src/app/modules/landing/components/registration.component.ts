import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-registration',
  template: `
  <div id="form-registration" class="p-4 row ">
  <app-custom-button [customDataButton]="{label:'Back to Login', link:'/login'}"></app-custom-button>

        <h2 class="col-sm-4 ">Tutto quello che non ti aspettavi di trovare</h2>
      <form class="col-12 col-sm-3 offset-sm-4 d-flex flex-column align-items-center gradient-bg  p-3 mt-2" [formGroup]="registrationForm">
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

        <app-custom-button [customDataButton]="{label: 'Registrati', classes: 'mt-4'}" (callFnFromOutside)="userRegistration()"></app-custom-button>
      </form>
    </div>

  `,
  styles: [
    `
    #form-registration {

        background: url('../../../../assets/images/registrationbg.jpg');
        border-radius: 10px;
        h2 {
          text-shadow: var(--text-shadow);
        }
        form {
          border-radius: 10px;
          box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
            input {
              width: 75%;
              margin: 1rem;
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
