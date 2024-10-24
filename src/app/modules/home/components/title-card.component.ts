import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-title-card',
  template: `
  <div id="card-film-container" class="d-flex">
    <div  (mouseover)="title.showDetail = true" class="card-film text-light bg-light">
     <img src="{{title.urlCopertina}}">

      <div (click)="openPlayer()" (mouseout)="title.showDetail = false" *ngIf="title.showDetail" class="absolute-information d-flex flex-column align-items-center">
        <h3>{{title.titolo}}</h3>
        <p>{{title.descrizione}}</p>
        <div>
          <span class="mx-2">Uscita: {{title.anno}}</span>
          <span class="mx-2">Durata: {{title.durata}}</span>
        </div>
      </div>
      <div id="shadow-screen" *ngIf="title.showPlayer">
        <div id="player">
          <div id="close-video" (click)="title.showPlayer = !title.showPlayer">Chiudi</div>
            <video controls src="{{title.urlStream}}"></video>
          </div>
        </div>
      </div>
  </div>


  `,
  styles: [
    `
    #card-film-container {
      overflow-x: auto;
      overflow-y: hidden;

      .card-film {
        position: relative;
        margin: 0 0.8rem;
        border-radius: 5px;
        font-size: 0;
        transition: 1s;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -2px rgba(0,0,0,0.47);
        box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -2px rgba(0,0,0,0.47);
        cursor: pointer;
        h3 {
          font-size: 0;
        }
        &:hover {
          font-size: 1em;
          h3 {
            font-size: 2em;
          }
        }
        img {
          width: clamp(300px, 355px, 380px);
          border-radius: 5px;
        }

        .absolute-information {
          padding: 3rem;
          width: 100%;
          position: absolute;
          bottom: 0;
          background: trasparent;
        }

        #shadow-screen {
          position: fixed;
          z-index: 101;
          width: 90rem;
          height: 78rem;
          left: 0;
          top: -50%;
          background: rgba(0,0,0,0.47);
        }

        #player {

          position: fixed;
          top: 3%;
          left: 2%;
          video {
            -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px 3px rgba(150,150,250,0.4);
          box-shadow: 0px 10px 13px -7px #000000, 1px 1px 27px -3px rgba(180,180,250,0.4);
            width: 100%;
            height: 48rem;
            border-radius: 10px;
          }

          #close-video {
            position: absolute;
            left: 95%;
            top: 2%;
            z-index: 101;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
    @media (max-width: 600px) {
      .card-film {
        img {

        }
      }

    }
    `
  ]
})
export class TitleCardComponent implements OnInit {
  @Input() title!:IFilm;
  public showDet:boolean = false;

  constructor(private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
  }

 check(title:IFilm) { title.showPlayer = false
    console.log(title.showPlayer)
  }

  openPlayer () {
    this.title.showPlayer = !this.title.showPlayer
    const date = new Date()

    this.title.lastWatch = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay() < 10? '0'+ date.getDay() : date.getDay()}`
    this.titlesStream.updateFilm(this.title)
  }

}
