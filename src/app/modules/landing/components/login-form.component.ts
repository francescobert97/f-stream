import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login-form',
  template: `
 <div id="form-login" class="text-light d-flex justify-content-start mt-4 p-4 ">
      <form class="d-flex flex-column" [formGroup]="profileForm">
        <label for="first-name"> Username: </label>
        <input class="text-light" id="first-name" type="text" formControlName="username">

        <label for="last-name">Password: </label>
        <input class="text-light" id="last-name" type="text" formControlName="password">
        <div class="mt-3 d-flex gap-2">
          <app-custom-button (callFnFromOutside)="dataR('user')" [customDataButton]="{label:'Login', classes:'gradient-bg', link:''}"></app-custom-button>
          <app-custom-button (callFnFromOutside)="dataR('guest')" [customDataButton]="{label:'Login as a guest', classes:'gradient-bg', link:''}"></app-custom-button>
        </div>

      </form>
    </div>
  `,
  styles: [
    `

    #form-login {

        form {
          width: 100%;
          input {

            border-radius: 5px;
            background: rgba(0,0,0,0.6);
            border: none;
            &:focus {
            outline: none;
            }
          }
        }
      }
    `
  ]
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    }
    )
    dataR(mode:string) {
      this.loginService.userAuth2(mode === 'user'?this.profileForm.value : {}).subscribe(data => {if(data) this.router.navigateByUrl('/home/comedy')})
    }

}
