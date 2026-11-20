import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPanCard]',
  standalone: false
})
export class PanCardDirective {

  constructor() { }
  @HostListener('input',['$event'])
  inputChanges(event:Event){
    let input =  event.target as HTMLInputElement;
    let rec   = input.value.toUpperCase().slice(0,10);
    let str1  = rec.slice(0,5).replace(/[^a-zA-Z]/g,'');
    let num   = rec.slice(5,9).replace(/[^0-9]/g,'');
    let str2  = rec.slice(9).replace(/[^a-zA-Z]/g,'');
    input.value = str1 + num + str2;
   }
}
