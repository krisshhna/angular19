import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SettingService } from '../../../../service/setting.service';

@Component({
  selector: 'app-a-shop-serv',
  standalone: false,
  templateUrl: './a-shop-serv.component.html',
  styleUrl: './a-shop-serv.component.css'
})
export class AShopServComponent {
  public fb = inject(FormBuilder);
  constructor(public _setting:SettingService){}

  shopServ  = this.fb.group({
    _id:    [''],
    name:   ['',[Validators.required]],
    status: [''],
  });

  label = 'Submit';
  displayedColumns: string[] = [
    '_id',
    'name',
    'status',
    'edit',
  ];
  dataSource!:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.allService();
  }

  allService(){
    this._setting.findAll().subscribe({
      next:(res:any)=>{
        this.dataSource = new MatTableDataSource(res.result);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  editService(_id:string, name:string, status:any){
    this.label = 'Update';
    this.shopServ.setValue({_id, name, status});
  }

  shopServSubmit(){
      this.label = 'Submit';
      let id = this.shopServ.value._id;
      if(id === ''){
        delete this.shopServ.value._id;
      }
      console.log(this.shopServ.value);
      this._setting.create(this.shopServ.value).subscribe({
        next:(res:any)=>{
          this.allService();
          this.shopServ.reset();
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  // applyFilter(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = value.trim().toLowerCase();
  // }
}
