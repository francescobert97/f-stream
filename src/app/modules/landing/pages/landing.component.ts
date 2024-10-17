import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { ILogin } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  template: `
  <div id="intro-animation" *ngIf="closeAnimation" class="">
    <app-landing-intro></app-landing-intro>
  </div>

  <div id="content-landing" class="text-light d-flex align-items-center justify-content-center flex-column mt-4">
    <div class="text-style">
      <h2>Il migliore sito di streaming sul mercato</h2>
      <p>Film, Serie TV, documentari e tanto altro.</p>
      <h3>Registrati o accedi se hai già un account</h3>
      <button class="text-light" (click)="openRegistrationForm = !openRegistrationForm">Registrati</button>
    </div>

    <div id="form-registration" class="d-flex justify-content-end align-items-center" *ngIf="openRegistrationForm">
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

    <div id="form-login" class="text-light d-flex justify-content-center mt-4 p-4 ">
      <form class="d-flex flex-column" [formGroup]="profileForm">
        <label for="first-name"> Username: </label>
        <input class="text-light" id="first-name" type="text" formControlName="username">

        <label for="last-name">Password: </label>
        <input class="text-light" id="last-name" type="text" formControlName="password">
        <button class="btn text-light mt-4" type="button" (click)="dataR()">Login</button>
      </form>
    </div>
  </div>
  `,
  styles: [
    `
    #intro-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
      overflow-x: hidden;
    }

    #content-landing {
      background: url("../../../../assets/images/landing-img.jpg") center top;
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
      box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
      padding: 3rem;
      width: 1000px;
      height: 40rem;
      background-size: 130%;
      border-radius: 10px;
      button{
        border-radius: 3px;
        padding: 0.5rem 1rem;
        border: none;
        background: rgba(150, 0, 0, 0.726);
        border: red;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
        &:hover {
          background: rgba(150, 0, 0, 0.996)
          }
      }
      .text-style {
        h2 {
          font-size: 3.3em;
        }
        h3 {
          font-size: 2em;
        }
      }

      #form-registration {
        position:absolute;
        z-index:500;
        width: 95%;
        height: 90%;
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
      #form-login {
        width: 35%;
        height: 40%;
        border-radius: 3px;
        margin-left: 12rem;
        form {
          width: 70%;
          input {
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
            background: rgba(0,0,0,0.6);
            border: none;
            &:focus {
            outline: none;
            }
          }

          button {
            box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(180,180,250,0.4);
            transition: 0.4s;
            background: rgba(150, 0, 0, 0.726);
            border: red;
            &:hover {
              background: rgba(150, 0, 0, 0.996)
            }
          }
        }
      }
    }
    `
  ]
})
export class LandingComponent implements OnInit {
  dataLog!:ILogin;
  public closeAnimation = true;
  public openRegistrationForm = false;

  constructor(private fb: UntypedFormBuilder, private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    if(localStorage.currentUser) {
      this.router.navigateByUrl('home/commedia')
    }

    setTimeout(() => {
      this.closeAnimation = false
    }, 4700);
  }

  registrationForm = this.fb.group({
    username: ['',  [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    realname: ['', [Validators.required]],
    eta: [''],
    }
    )


  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    }
    )

  dataR() {
    this.loginService.userAuth2(this.profileForm.value).subscribe(data =>  {
      if(data) {
        this.router.navigateByUrl('/home/commedia');
      }
    });
  }

  userRegistration() {
    this.loginService.newUser({id: Math.random().toString(36).substr(2, 9), picture: '../../../../assets/icon/avatar.png',...this.registrationForm.value})
    .subscribe(data => this.loginService.userAuth2(data).subscribe(data => {
      if(data) {
        this.router.navigateByUrl('/home/commedia')
      }
    }))
  }
  
}
