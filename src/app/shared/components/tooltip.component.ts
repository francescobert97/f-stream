import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
  <div class="custom-tooltip w-100 active-link bg-dark p-5 h-100 d-flex align-items-center" (mouseout)="closeTooltip()">
    <p class="">
      we are still working on this area you will be able to see it when it'll be ready to be shown!
    </p>
  </div>

  `,
  styles: [
  `
  .custom-tooltip {
    max-height: 130px;

    text-shadow: var(--text-shadow);
  }
  `
  ]
})
export class TooltipComponent implements OnInit {
@Output() activateSomething = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeTooltip () {
      this.activateSomething.emit('');
  }
}
