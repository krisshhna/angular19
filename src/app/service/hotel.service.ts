import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public api:ApiService) { }

  create(rec:any){
    return this.api.post(`hotel`, rec).pipe(catchError((err)=>of([])));
  }

  findAll(filter:any){
    return this.api.get(`hotel/${filter}`).pipe(catchError((err)=>of([])));
  }

  findOne(_id:string){
    return this.api.get(`hotel/${_id}`).pipe(catchError((err)=>of([])));
  }

  updateOne(_id:string, rec:any){
    return this.api.post(`hotel/${_id}`,rec).pipe(catchError((err)=>of([])));
  }
}
