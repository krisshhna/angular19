import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADashboardComponent } from './comp/a-dashboard/a-dashboard.component';
import { AUserComponent } from './comp/a-user/a-user.component';
import { AHeaderComponent } from './comp/a-header/a-header.component';
import { AShopServComponent } from './comp/a-shop-serv/a-shop-serv.component';

const routes: Routes = [
  {
    path:'',
    component:AHeaderComponent,
    children:[
      {path:'dashboard',  component:ADashboardComponent},
      {path:'user',       component:AUserComponent},
      {path:'shop-serv',  component:AShopServComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }