import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { FormsModule } from '@angular/forms';
import { PlayerContainerComponent } from './pages/player-container.component';
import { PlayerRoutingModule } from './player.routing.module';
import { UserInteractionToolsComponent } from './components/user-interaction-tools.component';
import { VideoPlayerComponent } from './components/video-player.component';



@NgModule({
  declarations: [PlayerContainerComponent,UserInteractionToolsComponent,VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    FormsModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
