import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapLet]',
  standalone: false
})
export class CapLetDirective {

  constructor() { }
  @HostListener('input',['$event'])
  inputChange(event:Event){
    let input  = event.target as HTMLInputElement;
    let rec    = input.value.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    input.value = rec;
  }
}
