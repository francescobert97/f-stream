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
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
      {path: ':category', component: SubsectionCategoryComponent},
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
