import { ResizeDirective } from './../directives/resize.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from '../components/no-access.component';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../components/custom-button.component';
import { RouterModule } from '@angular/router';
import { HamburgerComponent } from '../components/hamburger.component';


@NgModule({
  declarations: [NoAccessComponent, CustomButtonComponent, HamburgerComponent,ResizeDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NoAccessComponent,
    CustomButtonComponent,
    HamburgerComponent,
    ResizeDirective
  ]
})
export class UikitModule { }
