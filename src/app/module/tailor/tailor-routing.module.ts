import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaHeaderComponent } from './comp/ta-header/ta-header.component';
import { TaShopdetailComponent } from './comp/ta-shopdetail/ta-shopdetail.component';
import { TaCustomerComponent } from './comp/ta-customer/ta-customer.component';

const routes: Routes = [
  {
    path:'',
    component:TaHeaderComponent,
    children:[
      {path:'shop-detail',  component:TaShopdetailComponent},
      {path:'customer',     component:TaCustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailorRoutingModule { }