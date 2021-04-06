import { Component } from '@angular/core';

import { PoDynamicFormField, PoPageAction } from '@po-ui/ng-components';
import { CustomerModel } from '@model/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  public fields: Array<PoDynamicFormField> = new CustomerModel().formFields;
  public resource: CustomerModel = new CustomerModel();

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  getForm(item: any) {
    console.log(item.form.value);
  }

}