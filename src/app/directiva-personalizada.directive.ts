import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[cambioEnlaces]'
})
export class DirectivaPersonalizadaDirective {

  @HostBinding('class.estilo1') private ishovering!: boolean;
  private cadena:String;
  constructor(private el: ElementRef) { 
    this.cadena="";
  }

  @HostListener('mouseover') ratonPasa(){
    this.cadena=this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML=this.el.nativeElement.innerHTML.toUpperCase();
    this.ishovering=true;
    
  }

  @HostListener('mouseout') ratonSale(){
    this.ishovering=false;
    this.el.nativeElement.innerHTML=this.cadena;
  }
}
