import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HHeaderComponent } from './comp/h-header/h-header.component';
import { HHotelListComponent } from './comp/h-hotel-list/h-hotel-list.component';
import { HHoteAddComponent } from './comp/h-hote-add/h-hote-add.component';

const routes: Routes = [
  {
    path:'',
    component:HHeaderComponent,
    children:[
      {path:'hotel-list', component:HHotelListComponent},
      {path:'hotel-add',  component:HHoteAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
