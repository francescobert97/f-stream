import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './pages/area.component';
import { UserDataComponent } from './components/user-data.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    AreaComponent,
    UserDataComponent,
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    UikitModule
  ]
})
export class AreaModule { }
