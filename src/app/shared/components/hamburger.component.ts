import { Component, input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  template: `
      <div (click)="triggerFunction()" class="flex-column hamburger h-100  mx-auto" *appResize="'reverse'">
        <span>____</span>
        <span>____</span>
        <span>____</span>
      </div>
  `,
  styles: [
    `
      .hamburger {
    line-height:0.6;
    text-shadow: var(--text-shadow);
    display:flex;
    }
    `
  ]
})
export class HamburgerComponent implements OnInit {
  @Output() openElement = new EventEmitter<unknown>()

  constructor() { }

  ngOnInit(): void {
  }

  triggerFunction() {
    this.openElement.emit(null)
  }
}
