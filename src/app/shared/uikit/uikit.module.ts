import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from '../components/no-access.component';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../components/custom-button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NoAccessComponent, CustomButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NoAccessComponent,
    CustomButtonComponent
  ]
})
export class UikitModule { }
