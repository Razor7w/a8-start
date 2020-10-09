import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(
    private eRef: ElementRef
  ) { }

  @HostListener('mouseover') showBorder() {
    this.eRef.nativeElement.classList.add('paddingAll');
    console.log('MouseOver -->');
  }

  @HostListener('mouseout') hideBorder() {
    this.eRef.nativeElement.classList.remove('paddingAll');
    console.log('MouseOut -->');
  }

}
