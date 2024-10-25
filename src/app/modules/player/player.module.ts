import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { FormsModule } from '@angular/forms';
import { PlayerContainerComponent } from './player-container.component';



@NgModule({
  declarations: [PlayerContainerComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    FormsModule
  ]
})
export class PlayerModule { }
