import {Directive, input, signal} from '@angular/core';

@Directive({
  selector: '[appHover]',
  host: {
    '(mouseenter)': 'hover.set(true)',
    '(mouseleave)': 'hover.set(false)',
    '[style.backgroundColor]': "hover() ? (color() || 'var(--mat-sys-secondary-container)') : ''"
  }
})
export class NewDirective {
  color = input('', { alias: 'appHover'});
  protected hover = signal(false);
}
