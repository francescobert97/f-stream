import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './pages/area.component';
import { UserDataComponent } from './components/user-data.component';


@NgModule({
  declarations: [
    AreaComponent,
    UserDataComponent,
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
  ]
})
export class AreaModule { }
