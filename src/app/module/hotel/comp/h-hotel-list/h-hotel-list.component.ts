import { Component, ViewChild } from '@angular/core';
import { SettingService } from '../../../../service/setting.service';
import { HotelService } from '../../../../service/hotel.service';
import { combineLatest, debounceTime, distinctUntilChanged, forkJoin, Subject } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  loadRecord(page:number){
    return this._hotel.findAll(page);
  }

  setRecord(res:any){
    this.pagination    = res.result.pagination;
    this.pages = Array.from({length:this.pagination.total}, (_,index)=>index+1);

    this.dataSource = new MatTableDataSource(res.result.hotel);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  secondHit(nextPage:number){
    this.loadRecord(nextPage).subscribe({
      next:((res:any)=>{
        this.setRecord(res);
      }),
      error:((err)=>{
        console.log(`Error ${err}`);
      })
    });
  }

  applyFilter(){
    let filterRec = {page:this.pageValue, location:this.locationValue, search:this.searchValue};
    console.log(filterRec);
  }

  searchFilter(value:string){
    this.searchValue = value;
    this.searchSubject.next(this.searchValue);
  }
}
