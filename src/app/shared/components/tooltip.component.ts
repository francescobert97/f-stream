import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
  <div class="active-link" (mouseout)="closeTooltip()">
    <p class="w-25 p-5">
      we are still working on this area you will be able to see it when it'll be ready to be shown!
    </p>
  </div>

  `,
  styles: [
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
