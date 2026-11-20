import { Component, ViewChild } from '@angular/core';
import { SettingService } from '../../../../service/setting.service';
import { HotelService } from '../../../../service/hotel.service';
import { combineLatest, debounceTime, distinctUntilChanged, forkJoin, Subject } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-h-hotel-list',
  standalone: false,
  templateUrl: './h-hotel-list.component.html',
  styleUrl: './h-hotel-list.component.css'
})
export class HHotelListComponent {
  constructor(public _setting:SettingService, public _hotel:HotelService){}
  location:any;
  pages:any;
  pagination:any;
  pageValue = 1;
  locationValue = '';
  searchValue = '';
  statusValue = '';

  displayedColumns: string[] = [
    '_id',
    'name',
    'edit'
  ];
  dataSource!:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  searchSubject = new Subject();

  ngOnInit(){
    forkJoin({
      location: this._setting.getAllLocation(),
      hotelRec: this.loadRecord(1),
    }).subscribe((res:any)=>{
      this.location = res.location.result;
      this.setRecord(res.hotelRec);
    });

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(()=>{
      this.applyFilter();
    })
  }

  loadRecord(filter:any){
    return this._hotel.findAll(filter);
  }

  setRecord(res:any){
    this.pagination    = res.result.pagination;
    this.pages = Array.from({length:this.pagination.total}, (_,index)=>index+1);

    this.dataSource = new MatTableDataSource(res.result.hotel);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(){
    let abc:any = {location:this.locationValue, search:this.searchValue, status:this.statusValue};
    let filtered:any = Object.fromEntries(Object.entries(abc).filter(([key, value]) => value !== ''));
    let queryParams = new URLSearchParams(filtered).toString();

    let query = queryParams != '' ? `${this.pageValue}?${queryParams}` : this.pageValue;
    this.loadRecord(query).subscribe({
      next:((res)=>{
        this.setRecord(res);
      }),error:((err)=>{
        console.log(`Error message ${err}`);
      })
    })
  }

  searchFilter(value:string){
    this.searchValue = value;
    this.searchSubject.next(this.searchValue);
  }
}
