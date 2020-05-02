import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {  SupplierComponent} from "../supplier/supplier.component";



const SupplierRout: Routes = [

{path:'',component:SupplierComponent}

];

@NgModule({
  imports: [RouterModule.forChild(SupplierRout)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
