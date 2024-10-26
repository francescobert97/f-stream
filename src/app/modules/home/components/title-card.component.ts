import { Router, ParamMap } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-title-card',
  template: `
  <div id="card-film-container" class="d-flex">
    <div  (mouseover)="title.showDetail = true" class="card-film text-light bg-light">
     <img src="{{title.urlCopertina}}">

      <div (click)="openPlayer(title)" (mouseout)="title.showDetail = false" *ngIf="title.showDetail" class="absolute-information d-flex flex-column align-items-center">
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

  constructor(private router:Router,private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
  }

 check(title:IFilm) { title.showPlayer = false
    console.log(title.showPlayer)
  }

  openPlayer (title:IFilm) {
    const {id, urlStream } = title
    //this.title.showPlayer = !this.title.showPlayer
    this.router.navigate([`/player/${id}`], {queryParams:{ url:urlStream}})
    const date = new Date()

    this.title.lastWatch = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay() < 10? '0'+ date.getDay() : date.getDay()}`
    this.titlesStream.updateFilm(this.title)
  }

}
