import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]',
  standalone: false
})
export class PhoneDirective {

  constructor() { }
  @HostListener('input',['$event'])
  inputPhone(event:Event){
    let input = event.target as HTMLInputElement;
    let rec   = input.value.replace(/[^0-9]/g,'');
    rec = rec.slice(0,10);
    input.value = rec;
  }
}
