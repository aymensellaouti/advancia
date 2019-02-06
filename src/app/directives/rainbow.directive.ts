import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors = [
    'lightgreen',
    'lightcoral',
    'blue',
    'lightblue',
    'coral',
    'purple',
    'yellow',
    'red',
    'gold',
    'navajowhite'
  ];
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  constructor() { }
  @HostListener('keypress') changeColor() {
    const i = Math.floor(Math.random() * (this.colors.length - 1));
    const j = Math.floor(Math.random() * (this.colors.length - 1));
    this.bc = this.colors[i];
    this.color = this.colors[j];
  }
}
