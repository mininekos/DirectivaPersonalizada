import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cambioEnlaces]'
})
export class DirectivaPersonalizadaDirective {

  @HostBinding('class.estilo1') private ishovering!: boolean;
  
  @Input('cambioEnlaces') datos={
    texto:"No metiste texto",
    color:"rojo"
  }

  private cadenatxtAnterior:String;
  constructor(private el: ElementRef) { 
    this.cadenatxtAnterior="";
  }

  @HostListener('mouseover') ratonPasa(){
    this.cadenatxtAnterior=this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML=this.datos.texto.toUpperCase();
    this.el.nativeElement.className=this.datos.color;
    this.ishovering=true;
    
  }

  @HostListener('mouseout') ratonSale(){
    this.ishovering=false;
    this.el.nativeElement.innerHTML=this.cadenatxtAnterior;
    this.el.nativeElement.className="";
  }
}
