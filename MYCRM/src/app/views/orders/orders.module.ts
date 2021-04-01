import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';


@NgModule({
  declarations: [PageListOrderComponent, PageAddOrderComponent, PageEditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
