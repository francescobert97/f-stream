import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


import { HomeComponent } from './pages/home.component';
import { NavCategoryComponent } from './components/nav-category.component';
import { TitleCardComponent } from './components/title-card.component';
import { SubsectionCategoryComponent } from './components/subsection-category.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ResultsComponent } from './components/results.component';
import { SearchBarComponent } from './components/search-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NavCategoryComponent,
    TitleCardComponent,
    SubsectionCategoryComponent,
    ResultsComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UikitModule,
    FormsModule
  ]
})
export class HomeModule { }
