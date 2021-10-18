import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from '../components/no-access.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NoAccessComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NoAccessComponent,
  ]
})
export class UikitModule { }
