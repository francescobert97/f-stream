import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilm, MOVIE_FALLBACK } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-video-player',
  template: `
              <div id="player"class="z-index-moreover offset-sm-2 col-sm-8 ">
                <app-custom-button (callFnFromOutside)="closePlayer()" [customDataButton]="{label:'Close', classes:'position-absolute close-video-player z-index-moreover'}" ></app-custom-button>
                  <video class="active-link"  controls src="{{this.movie.urlStream}}"></video>
              </div>
  `,
  styles: [
    `
         #player {
            position: fixed;
            top: 15%;
            left: 2%;
            video {
              width: 100%;
            }
          }
    `
  ]
})
export class VideoPlayerComponent implements OnInit {
@Input() movie:IFilm = MOVIE_FALLBACK
@Output() closeVideoplayer = new EventEmitter();
  constructor(private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
    const date = new Date();
    this.movie.lastWatch = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay() < 10? '0'+ date.getDay() : date.getDay()}`;
    this.titlesStream.updateFilm(this.movie);
  }

  closePlayer() {
      this.closeVideoplayer.emit(null);
  }
}
