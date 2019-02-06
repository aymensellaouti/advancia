import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() colorOut = 'red';
  @Input() colorIn = 'yellow';
  @HostBinding('style.backgroundColor') color = this.colorOut;
  constructor() { }
  @HostListener('mouseover') changeColor() {
    this.color = this.colorIn;
  }
@HostListener('mouseleave') changeColor2() {
    this.color = this.colorOut;
  }

}
