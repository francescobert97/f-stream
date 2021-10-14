import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-commedia',
  template: `
    <div>
      <app-subsection-category [sectionTitle]="'Commedia'" [titles]="titles"></app-subsection-category>
    </div>
  `,
  styles: [
  ]
})
export class CommediaComponent implements OnInit {
  public titles:IFilm[] = [];
  constructor(private titlesStream:TitlesStreamService) { }
  

  ngOnInit(): void {
    this.titlesStream.getAll().subscribe(data => 
      this.titles = data[0]);
  }

}
