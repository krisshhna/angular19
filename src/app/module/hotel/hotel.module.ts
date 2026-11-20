import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HHeaderComponent } from './comp/h-header/h-header.component';
import { HHotelListComponent } from './comp/h-hotel-list/h-hotel-list.component';
import { HHoteAddComponent } from './comp/h-hote-add/h-hote-add.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HHeaderComponent,
    HHotelListComponent,
    HHoteAddComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule
  ]
})
export class HotelModule { }
