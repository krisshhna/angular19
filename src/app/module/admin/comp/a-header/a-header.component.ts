import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../../../service/setting.service';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-a-header',
  standalone: false,
  templateUrl: './a-header.component.html',
  styleUrl: './a-header.component.css'
})
export class AHeaderComponent {
  total:any;
  totalPrice:any;
  constructor(public router:Router, public _set:SettingService){}
  
  ngOnInit(){
    combineLatest({
      totalCart:this._set.cartRec,
      totalPrice:this._set.cartPrice
    }).subscribe({
      next:((res:any)=>{
        let allValue = Object.values(res.totalCart);
        let totalCart = Object.entries(res.totalCart).reduce((acc:any, [key, val]:any)=>{
            const price = res.totalPrice[key] || 0;
            acc.total += val;
            acc.totalPrice += price * val;

          return acc;
        },{total:0, totalPrice:0});
        this.total = totalCart.total;
        this.totalPrice = totalCart.totalPrice;
      }),error:((err)=>{
        console.log(`Error record ${err}`);
      })
    })
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
