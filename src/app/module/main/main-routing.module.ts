import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDashboardComponent } from './comp/m-dashboard/m-dashboard.component';
import { MLoginComponent } from './comp/m-login/m-login.component';

const routes: Routes = [
  {
    path:'',
    component:MDashboardComponent,
    children:[
      {path:'login',    component:MLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
