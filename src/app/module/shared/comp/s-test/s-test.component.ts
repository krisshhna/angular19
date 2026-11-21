import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SettingService } from '../../../../service/setting.service';

@Component({
  selector: 'app-s-test',
  standalone: false,
  templateUrl: './s-test.component.html',
  styleUrl: './s-test.component.css'
})
export class STestComponent implements OnChanges{
  @Input() allListing!:any;
  modifyValue:any = {};
  modifyPrice:any = {};
  constructor(public _set:SettingService){}

  ngOnChanges(){
    this._set.cartRec.subscribe({
      next:(res=>{
        this.modifyValue = res;
      }),error:(err=>{
        console.log(`error encountered ${err}`);
      })
    })
  }

  adjustVal(id:number, type:string){
    let allValueList = this.allListing;
    let price = allValueList.filter((x:any)=>x.id === id);
    let validate = (this.modifyValue[id] || 0) +1;
    this.modifyValue[id] = type === '+' ? validate : Math.max(0,this.modifyValue[id]-1);
    this.modifyPrice[id] = price[0].price;
    if(this.modifyValue[id] === 0){
      delete this.modifyPrice[id];
      delete this.modifyValue[id];
    }
    this._set.updatePrice(this.modifyPrice);
    this._set.updateCart(this.modifyValue);
  }
}
