import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TestComponent
  ]
})
export class UikitModule { }
