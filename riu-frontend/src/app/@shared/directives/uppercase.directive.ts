import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    //Declaro native element haciendo referencia al Elemento que reciba la directiva.
    const nativeElement = this.el.nativeElement;
    // cambio su valor a upperCase (podría solucionarse también con pipe upperCase nativo de Angular {{ valor | uppercase}} o [ngModel]="nameFilter() | uppercase")
    nativeElement.value = nativeElement.value.toUpperCase();
  }
}
