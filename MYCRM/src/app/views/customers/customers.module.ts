import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { PageListCustomerComponent } from './pages/page-list-customer/page-list-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayValuePipe } from './pipes/display-value.pipe';
import { PageAddCustomerComponent } from './pages/page-add-customer/page-add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageEditComponent } from './pages/page-edit/page-edit.component';


@NgModule({
  declarations: [PageListCustomerComponent,
    DisplayValuePipe,
    PageAddCustomerComponent,
    PageEditComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CustomersModule { }
