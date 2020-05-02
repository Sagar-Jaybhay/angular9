import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from '../Routing/Customer-routing.Customer';
import { CustomerComponent } from './Customer.component';


@NgModule({
  declarations: [   
    CustomerComponent    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
