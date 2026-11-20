import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AHeaderComponent } from './comp/a-header/a-header.component';
import { ADashboardComponent } from './comp/a-dashboard/a-dashboard.component';
import { AUserComponent } from './comp/a-user/a-user.component';
import { AShopServComponent } from './comp/a-shop-serv/a-shop-serv.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AHeaderComponent,
    ADashboardComponent,
    AUserComponent,
    AShopServComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
