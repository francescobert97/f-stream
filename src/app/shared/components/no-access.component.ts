import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [
  ]
})
export class NoAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
