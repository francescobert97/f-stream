import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotizieRoutingModule } from './notizie-routing.module';
import { NotizieComponent } from './pages/notizie.component';
import { PostComponent } from './components/post.component';



@NgModule({
  declarations: [
    NotizieComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    NotizieRoutingModule
  ]
})
export class NotizieModule { }
