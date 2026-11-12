import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  // This builds a sanitizer that we are going to use to add
  // <b> tags around our content
  constructor(private sanitizer: DomSanitizer){}

  // The return type is SafeHtml and not string
  transform(boldThis: string | null | undefined, fallback = ''): SafeHtml {
    if(!boldThis){
      return fallback;
    }
    // Return HTML code of the text with <b> tags surrounding it
    return this.sanitizer.bypassSecurityTrustHtml(`<b>${boldThis}</b>`);
  }
}
