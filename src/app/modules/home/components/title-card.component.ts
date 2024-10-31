import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { IFilm, MOVIE_FALLBACK } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';
import { saveTolocalStorage } from 'src/app/shared/utils/localstorage';

@Component({
  selector: 'app-title-card',
  template: `
  <div id="card-film-container" class="d-flex">
    <div (mouseover)="showDet = true" class="card-film text-light bg-light">
     <img src="{{movie.urlCopertina}}">

      <div (click)="openPlayer()" (mouseout)="showDet = false" *ngIf="showDet" class="absolute-information d-flex flex-column align-items-center">
        <h3>{{movie.titolo}}</h3>
        <p>{{movie.descrizione}}</p>
        <div>
          <span class="mx-2">Uscita: {{movie.anno}}</span>
          <span class="mx-2">Durata: {{movie.durata}}</span>
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
  @Input() movie:IFilm = MOVIE_FALLBACK;
  public showDet:boolean = false;

  constructor(private router:Router,private titlesStream: TitlesStreamService) { }

  ngOnInit(): void {
  }



public  openPlayer () {
    const {id, genere } = this.movie
   saveTolocalStorage('currentMovieWatched', this.movie)
    this.router.navigate([`/player`], {queryParams:{id, genere}})

  }

}
