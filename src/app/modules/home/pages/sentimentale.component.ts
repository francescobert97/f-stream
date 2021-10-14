import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-sentimentale',
  template: `
    <div>
      <app-subsection-category [sectionTitle]="'Sentimentale'" [titles]="titles"></app-subsection-category>
    </div>
  `,
  styles: [
  ]
})
export class SentimentaleComponent implements OnInit {
  public titles:IFilm[] = [];
  constructor(private titlesStream:TitlesStreamService) { }

  ngOnInit(): void {
    this.titlesStream.getAll().subscribe(data => 
      this.titles = data[6]);
      console.log(this.titles)
  }

}
