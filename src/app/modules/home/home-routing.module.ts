import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { ResultsComponent } from './components/results.component';
import { HomeComponent } from './pages/home.component';
import { SubsectionCategoryComponent } from './components/subsection-category.component';

const routes: Routes = [
  {
    path: '',
   component: HomeComponent,
    children: [
      {path: 'commedia/:category', component: SubsectionCategoryComponent},
      {path: 'drammatico/:category', component: SubsectionCategoryComponent},
      {path: 'azione/:category', component: SubsectionCategoryComponent},
      {path: 'horror/:category', component: SubsectionCategoryComponent},
      {path: 'popolari/:category', component: SubsectionCategoryComponent},
      {path: 'sentimentale/:category', component: SubsectionCategoryComponent},
      {path: 'thriller/:category', component: SubsectionCategoryComponent},
      {path: 'animazione/:category', component: SubsectionCategoryComponent},
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
