import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
})
export class PhonePipePipe implements PipeTransform {
  transform(phone: string | null | undefined, fallback = ''): string {
    // Digits is now phone number if there is one. Replace all non digits with a space.
    const digits = (phone ?? '').replace(/\D/g, '')
    // Length eleven here because phone numbers in this API start with an extra 0
    if(digits.length !== 10){
      return phone || fallback;
    }

    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}
    - ${digits.slice(6)}`;
  }
}
