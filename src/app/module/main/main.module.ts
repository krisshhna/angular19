import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MLoginComponent } from './comp/m-login/m-login.component';
import { MDashboardComponent } from './comp/m-dashboard/m-dashboard.component';


@NgModule({
  declarations: [
    MLoginComponent,
    MDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
