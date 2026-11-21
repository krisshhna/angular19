import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public api:ApiService){}

  createUser(rec:any){
    return this.api.post('user',rec).pipe(catchError((err)=>of([])));
  }
}
