import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotizieComponent } from './pages/notizie.component';

const routes: Routes = [{ path: '', component: NotizieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotizieRoutingModule { }
