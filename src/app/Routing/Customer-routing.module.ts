import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'Customer',loadChildren: ()=>import('../Customer/Customer.module').then(m=>m.CustomerModule)},
{path:'Supplier',loadChildren:()=>import('../supplier/supplier.module').then(m=>m.SupplierModule)},
{path:'Home',loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
