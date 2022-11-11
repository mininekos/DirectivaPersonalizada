import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[cambioEnlaces]'
})
export class DirectivaPersonalizadaDirective {

  @HostBinding('class.estilo1') private ishovering!: boolean;
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    if(this.el.nativeElement.tagName==='A')
      this.ishovering=true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.ishovering=false;
  }
}
