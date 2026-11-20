import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MLoginComponent } from './comp/m-login/m-login.component';
import { MDashboardComponent } from './comp/m-dashboard/m-dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MLoginComponent,
    MDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
