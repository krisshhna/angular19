import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  constructor(public api:ApiService){}

  cart = new BehaviorSubject({});
  cartRec = this.cart.asObservable();

  cartPrice = new BehaviorSubject({});
  updatePrice(rec:Object){
    this.cartPrice.next(rec);
  }

  updateCart(rec:Object){
    this.cart.next(rec);
  }

  create(rec:any){
    let id = rec._id;
    let str = id !==  null || '' ? `shop-serv/${id}` : 'shop-serv';
    return this.api.post(str, rec).pipe(catchError((err)=>of([])));
  }

  findAll(){
    return this.api.get('shop-serv').pipe(catchError((err)=>of([])));
  }

  findOne(id:string){
    return this.api.get(`shop-serv/${id}`).pipe(catchError((err)=>of([])));
  }

  createLocation(rec:any){
    return this.api.post('location', rec).pipe(catchError((err)=>of([])));
  }

  getAllLocation(){
    return this.api.get(`location`).pipe(catchError((err)=>of([])));
  }
}
