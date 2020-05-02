import { Component } from '@angular/core';
import {Customer} from '../Modela/Customer.model'
@Component({
  selector: 'app-root',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent {
  title = 'customerapplication';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
  }
}
