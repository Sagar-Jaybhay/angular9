import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "../Customer/Customer.component";

const CustomerRout: Routes = [
{path:'',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(CustomerRout)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
