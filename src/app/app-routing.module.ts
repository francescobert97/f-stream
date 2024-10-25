import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'area', loadChildren: () => import('./modules/area/area.module').then(m => m.AreaModule) },
  { path: 'notizie', loadChildren: () => import('./modules/notizie/notizie.module').then(m => m.NotizieModule) },
  { path: 'player', loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule) },
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  //{ path: 'results/:searchTerm', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
