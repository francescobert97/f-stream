import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AreaComponent } from './pages/area.component';
import { UserDataComponent } from './components/user-data.component';
import { SupportComponent } from './pages/support';
import { SubscriptionComponent } from './pages/subscription.component';
import { InformationComponent } from './pages/information.component';

const routes: Routes =  [
  {
    path: '',
    component: AreaComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'information', component: InformationComponent },
      { path: 'subscription', component: SubscriptionComponent },
      { path: 'support', component: SupportComponent }
    ]
  },
  { path: '', redirectTo: '/area/information', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
