import {Directive, input, output} from '@angular/core';

@Directive({
  selector: '[appProtect]',
  host: {
  '(click)': 'onClick()'
  }
})
export class AppProtect {
  question = input('', { alias: 'appProtect'});
  confirmed = output<void>();

  onClick(){
    if(confirm(this.question())){
      this.confirmed.emit();
    }
  }

}
