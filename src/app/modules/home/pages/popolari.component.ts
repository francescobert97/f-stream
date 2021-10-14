import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-popolari',
  template: `
  <div>
    <app-subsection-category [sectionTitle]="'i più Popolari'" [titles]="titles"></app-subsection-category>
  </div>
  `,
  styles: [
  ]
})
export class PopolariComponent implements OnInit {
  public titles:IFilm[] = [];
  constructor(private titlesStream:TitlesStreamService) { }

  ngOnInit(): void {
    this.titlesStream.getAll().subscribe(data => 
      this.titles = data[5]);
      console.log(this.titles)
  }

}
