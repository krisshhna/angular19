import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailorRoutingModule } from './tailor-routing.module';
import { TaHeaderComponent } from './comp/ta-header/ta-header.component';
import { TaShopdetailComponent } from './comp/ta-shopdetail/ta-shopdetail.component';
import { TaCustomerComponent } from './comp/ta-customer/ta-customer.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaHeaderComponent,
    TaShopdetailComponent,
    TaCustomerComponent
  ],
  imports: [
    CommonModule,
    TailorRoutingModule,
    SharedModule
  ]
})
export class TailorModule { }
