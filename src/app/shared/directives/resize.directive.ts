import { Directive, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

export type ModeType = 'standard' | 'reverse';
export interface IResize {
  operation: 'createView' | 'let',
  conditionMode:ModeType,
  width?: number

}
export interface IResizeClasses extends IResize {
  classes:string
}

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  resizeOperationsTypes:IResize | IResizeClasses = {operation: 'let', conditionMode:'standard', width: 600};
  embeddedRef:any;
  @Input() set appResize(data:IResize | IResizeClasses) {
    this.resizeOperationsTypes = data;
    this.executeRightOperation(data.conditionMode);
  }
  constructor(private vcf:ViewContainerRef, private tf:TemplateRef<any>,private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.executeRightOperation(this.resizeOperationsTypes.conditionMode);
  }

  executeRightOperation(condition:ModeType) {
    const isLargeScreen = window.innerWidth > (this.resizeOperationsTypes.width || 600);
    const operationType = this.resizeOperationsTypes.operation;
    operationType === 'let' && !this.embeddedRef? this.createView() : null;

    if(condition === 'standard') {
      if(isLargeScreen ) operationType === 'createView' && !this.embeddedRef?this.createView() :  this.updateClasses('add');
      if(!isLargeScreen && this.embeddedRef)operationType === 'createView'? this.clearView() : this.updateClasses('remove');
    }else{
        if(!isLargeScreen) operationType === 'createView' && !this.embeddedRef? this.createView() :  this.updateClasses('add');
        if(isLargeScreen && this.embeddedRef) operationType === 'createView'? this.clearView() : this.updateClasses('remove');
    }
  }

  createView() {
    this.embeddedRef = this.vcf.createEmbeddedView(this.tf);
  }
  clearView() {
    this.vcf.clear();
    this.embeddedRef = null;
  }

  updateClasses(operation:'add'|'remove') {
    operation === 'add'?
    this.renderer.addClass(this.embeddedRef.rootNodes[0],(this.resizeOperationsTypes as IResizeClasses).classes) :
    this.renderer.removeClass(this.embeddedRef.rootNodes[0], (this.resizeOperationsTypes as IResizeClasses).classes);
  }

}
