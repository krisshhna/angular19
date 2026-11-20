import { Injectable } from '@angular/core';
import { apiUrl } from '../../../enviornment/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = apiUrl.url;

  constructor(public http:HttpClient) { }

  get(urlRec:string){
    return this.http.get(`${this.api}${urlRec}`);
  }

  post(urlRec:string, rec:any){
    return this.http.post(`${this.api}${urlRec}`, rec);
  }

  delete(urlRec:string, _id:string){
    return this.http.delete(`${this.api}${_id}`);
  }
}
