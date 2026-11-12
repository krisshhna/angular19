import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAadharCard]',
  standalone: false
})
export class AadharCardDirective {

  constructor() { }

  @HostListener('input',['$event'])
  inputChange(event:Event){
    let input = event?.target as HTMLInputElement;
    let num = input.value.replace(/[^0-9]/,'');
    num = num.slice(0,12);
    input.value = num;
  }

}
