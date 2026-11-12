import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./module/main/main.module').then((x)=>x.MainModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./module/admin/admin.module').then((x)=>x.AdminModule)
  },
  {
    path:'tailor',
    loadChildren:()=>import('./module/tailor/tailor.module').then((x)=>x.TailorModule)
  },
  {
    path:'tution',
    loadChildren:()=>import('./module/tutions/tutions.module').then((x)=>x.TutionsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
