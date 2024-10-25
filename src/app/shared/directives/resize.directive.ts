import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  conditionMode:'standard'| 'reverse' = 'standard'
  @Input() set appResize(conditionToCheck:'standard'| 'reverse') {
    this.updateView(conditionToCheck);
    this.conditionMode = conditionToCheck;
  }
  alreadyExist:any;
  constructor(private vcf:ViewContainerRef, private tf:TemplateRef<any>) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateView(this.conditionMode)
  }

  updateView(condition:string) {
    switch(condition) {
      case 'standard':
        if(window.innerWidth > 600 && !this.alreadyExist)this.alreadyExist = this.vcf.createEmbeddedView(this.tf)
        if(window.innerWidth < 600) {
          this.vcf.clear()
          this.alreadyExist = null;
        }
        break;
      case('reverse'):
        if(window.innerWidth < 600 && !this.alreadyExist){this.alreadyExist = this.vcf.createEmbeddedView(this.tf)
          console.log('ricreo')
        }
          if(window.innerWidth > 600) {
            this.vcf.clear()
            this.alreadyExist = null;
          }
          break;
    }

  }
}


  /*  if(window.innerWidth > 600 && !this.alreadyExist) {
     this.alreadyExist = this.vcf.createEmbeddedView(this.tf)
    }
     if(window.innerWidth < 600) {
      this.vcf.clear()
      this.alreadyExist = null;
     }*/
