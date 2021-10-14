import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/models/film.model';
import { TitlesStreamService } from 'src/app/shared/services/titles-stream.service';

@Component({
  selector: 'app-drammatico',
  template: `
    <div>
      <app-subsection-category [sectionTitle]="'Drammatico'" [titles]="titles"></app-subsection-category>
    </div>
  `,
  styles: [
  ]
})
export class DrammaticoComponent implements OnInit {
  public titles:IFilm[] = [];
  constructor(private titlesStream:TitlesStreamService) { }

  ngOnInit(): void {
    this.titlesStream.getAll().subscribe(data => 
      this.titles = data[3]);
      console.log(this.titles)
  }

}
