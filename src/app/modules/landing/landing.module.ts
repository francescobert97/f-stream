import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingIntroComponent } from './components/landing-intro.component';



@NgModule({
  declarations: [
    LandingComponent,
    LandingIntroComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
