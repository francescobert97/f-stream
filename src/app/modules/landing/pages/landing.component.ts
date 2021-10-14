import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
      <h3>Abbonati o accedi se sei un abbonato</h3>
    </div>

    <div id="form-reg" class="text-light d-flex justify-content-center mt-4 p-4 ">
      <form class="d-flex flex-column"[formGroup]="profileForm">
        <label for="first-name"> Username: </label>
        <input id="first-name" type="text" formControlName="username">

        <label for="last-name">Password: </label>
        <input id="last-name" type="text" formControlName="password">
        <button class="btn btn-danger mt-4" type="button" (click)="dataR()">Login</button>
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

      .text-style {
        h2 {
          font-size: 3.3em;
        }
        h3 {
          font-size: 2em;
        }
      }

      #form-reg {
        width: 35%;
        height: 40%;
        border-radius: 3px;
        margin-left: 12rem;
        form {
          width: 70%;
          input {
            border-radius: 5px;
          }
        }
      }
    }
    `
  ]
})
export class LandingComponent implements OnInit {
  dataLog!:ILogin;
  sendDataLog!: ILogin;
  public closeAnimation = true;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.closeAnimation = false
    }, 4700);
  }
  profileForm = this.fb.group({
    username: [''],
    password: [''],
    }
    )

  dataR() {
   

    this.sendDataLog = this.profileForm.value;
    this.loginService.userAuth2(this.sendDataLog).subscribe(data => this.dataLog = data)


    /*this.loginService.userAuth().subscribe(data => { 
    this.dataLog = data
    console.log(this.dataLog)

    //this.loginService.sendUser(this.dataLog, this.sendDataLog).subscribe(data => data)
    });*/
    
      
    
     

    
  }
}
