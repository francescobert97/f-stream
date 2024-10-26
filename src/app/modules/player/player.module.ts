import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { FormsModule } from '@angular/forms';
import { PlayerContainerComponent } from './pages/player-container.component';
import { PlayerRoutingModule } from './player.routing.module';



@NgModule({
  declarations: [PlayerContainerComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    FormsModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
