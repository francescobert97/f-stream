import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerContainerComponent } from './player-container.component';

const routes: Routes = [
  {
    path: '',
   component: PlayerContainerComponent ,
    children: [
      {path: '/::film', component: PlayerContainerComponent },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
