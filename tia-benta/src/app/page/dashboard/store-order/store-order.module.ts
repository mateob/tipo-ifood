import { NgModule } from '@angular/core';

import { StoreOrderRoutingModule } from './store-order-routing.module';
import { StoreOrderDetailComponent } from './store-order-detail/store-order-detail.component';
import { StoreOrderFormComponent } from './store-order-form/store-order-form.component';
import { StoreOrderViewComponent } from './store-order-view/store-order-view.component';
import { StoreOrderListComponent } from './store-order-list/store-order-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [StoreOrderDetailComponent, StoreOrderFormComponent, StoreOrderViewComponent, StoreOrderListComponent],
  imports: [
    SharedModule,
    StoreOrderRoutingModule
  ]
})
export class StoreOrderModule { }