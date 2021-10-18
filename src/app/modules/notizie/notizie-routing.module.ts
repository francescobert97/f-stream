import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { NotizieComponent } from './pages/notizie.component';

const routes: Routes = [{ path: '', component: NotizieComponent,    canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotizieRoutingModule { }
