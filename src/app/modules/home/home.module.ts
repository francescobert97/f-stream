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
    SubsectionCategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
