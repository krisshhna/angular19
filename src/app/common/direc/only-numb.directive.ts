import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumb]',
  standalone: false
})
export class OnlyNumbDirective {

  constructor() { }
  @HostListener('input',  ['$event'])
  inputValue(event:Event){
    let input = event.target  as HTMLInputElement;
    let values= input.value.replace(/[^0-9]/g,'');
    input.value = values;
  }
}
