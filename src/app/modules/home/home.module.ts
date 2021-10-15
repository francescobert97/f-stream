import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


import { HomeComponent } from './pages/home.component';
import { NavCategoryComponent } from './components/nav-category.component';
import { TitleCardComponent } from './components/title-card.component';
import { CommediaComponent } from './pages/commedia.component';
import { AzioneComponent } from './pages/azione.component';
import { DrammaticoComponent } from './pages/drammatico.component';
import { HorrorComponent } from './pages/horror.component';
import { PopolariComponent } from './pages/popolari.component';
import { SentimentaleComponent } from './pages/sentimentale.component';
import { ThrillerComponent } from './pages/thriller.component';
import { AnimazioneComponent } from './pages/animazione.component';
import { SubsectionCategoryComponent } from './components/subsection-category.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ResultsComponent } from './components/results.component';
import { SearchBarComponent } from './components/search-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NavCategoryComponent,
    CommediaComponent,
    AzioneComponent,
    TitleCardComponent,
    DrammaticoComponent,
    HorrorComponent,
    PopolariComponent,
    SentimentaleComponent,
    ThrillerComponent,
    AnimazioneComponent,
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
