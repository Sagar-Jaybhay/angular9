import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupplierRoutingModule } from '../Routing/Customer-routing.Supplier';
import { SupplierComponent } from '../supplier/supplier.component';

@NgModule({
  declarations: [   
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],
  providers: []  ,
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
