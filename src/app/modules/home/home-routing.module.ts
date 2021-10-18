import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { ResultsComponent } from './components/results.component';
import { AnimazioneComponent } from './pages/animazione.component';
import { AzioneComponent } from './pages/azione.component';
import { CommediaComponent } from './pages/commedia.component';
import { DrammaticoComponent } from './pages/drammatico.component';
import { HomeComponent } from './pages/home.component';
import { HorrorComponent } from './pages/horror.component';
import { PopolariComponent } from './pages/popolari.component';
import { SentimentaleComponent } from './pages/sentimentale.component';
import { ThrillerComponent } from './pages/thriller.component';

const routes: Routes = [
  { 
    path: '',
   component: HomeComponent,
    children: [
      {path: 'commedia', component: CommediaComponent},
      {path: 'drammatico', component: DrammaticoComponent},
      {path: 'azione', component: AzioneComponent},
      {path: 'horror', component: HorrorComponent},
      {path: 'popolari', component: PopolariComponent},
      {path: 'sentimentale', component: SentimentaleComponent},
      {path: 'thriller', component: ThrillerComponent},
      {path: 'animazione', component: AnimazioneComponent},
      {path: 'results/:searchTerm', component: ResultsComponent}
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
