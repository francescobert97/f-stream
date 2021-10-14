import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-light d-flex justify-content-center p-4">
    <div>LOGO</div>
    <div class="d-flex">
      <a>Termini e privacy</a>
      <a>Informativa sui cookie</a>
      <a>Supporto</a>
      <span>Francesco, 2021</span>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
