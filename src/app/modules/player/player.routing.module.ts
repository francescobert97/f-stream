import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerContainerComponent } from './pages/player-container.component';
import { MovieGuard } from 'src/app/core/movie.guard';

const routes: Routes = [
  {
    path: '',
   component: PlayerContainerComponent ,
    children: [
      {path: ':movieId', component: PlayerContainerComponent },
    ],
    canActivate: [MovieGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
