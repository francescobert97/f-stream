import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing.component';
import { RegistrationComponent } from './components/registration.component';
import { LoginComponent } from './pages/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '', component: LandingComponent,
  children: [
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
