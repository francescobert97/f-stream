import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test.component';
import { SearchBarComponent } from '../../modules/home/components/search-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TestComponent,
  ]
})
export class UikitModule { }
