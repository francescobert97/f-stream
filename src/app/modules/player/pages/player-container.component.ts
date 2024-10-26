import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/shared/models/film.model';


@Component({
  selector: 'app-player-container',
  template: `
            <div class="w-100  p-3 movie-information">
              <h1 class="col-sm-6 offset-md-2 p-4 col-12">TITLE FILM</h1>
              <div class="col-12 bg-light text-dark col-sm-10 offset-md-1 active-link position-relative">
                  <img src="#" alt="img copertina" style="min-height: 500px;">
                  <app-custom-button (callFnFromOutside)="showPlayer = !showPlayer" [customDataButton]="{label:'PLAY', classes:'position-absolute play-btn gradient-bg p-4'}" ></app-custom-button>

                </div>
              <p class="col-sm-2 offset-md-2 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta eum voluptas ad placeat! Perspiciatis, incidunt id! A, similique et animi, fuga molestiae molestias fugiat totam sed provident in natus.</p>
              <div class="offset-1 d-flex gap-3">
                <app-custom-button  [customDataButton]="{label:'Add F', classes:' p-4'}" ></app-custom-button>
                <app-custom-button  [customDataButton]="{label:'Rate', classes:' p-4'}" ></app-custom-button>
              </div>


            </div>

            <div *ngIf="showPlayer" id="shadow-screen" class="z-index-strong row">
              <div id="player"class="z-index-moreover offset-2 col-sm-8">
                <app-custom-button (callFnFromOutside)="showPlayer = !showPlayer" [customDataButton]="{label:'Close', classes:'position-absolute close-video-player z-index-moreover'}" ></app-custom-button>
                  <video class="active-link"  controls src="{{urlVideo}}"></video>
              </div>
            </div>
  `,
  styles: [
  `
          .movie-information {
            text-shadow: var(--text-shadow);
            h1 {
              letter-spacing: 2px;
            }
          }
          #shadow-screen {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.47);
          }

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
export class PlayerContainerComponent implements OnInit {
  showPlayer:boolean = false;
  urlVideo!:string
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(url => {
      this.urlVideo = url.url

    })
  }


}
