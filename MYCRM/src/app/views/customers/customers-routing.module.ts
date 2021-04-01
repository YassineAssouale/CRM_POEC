import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlsGuard } from 'src/app/core/services/guards/access-controls.guard';
import { PageAddCustomerComponent } from './pages/page-add-customer/page-add-customer.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';
import { PageListCustomerComponent } from './pages/page-list-customer/page-list-customer.component';

const routes: Routes = [
  {
    path: '', component: PageListCustomerComponent, canActivate: [AccessControlsGuard],
    children: [
      { path: 'edit/:id', component: PageEditComponent, canActivate: [AccessControlsGuard] },
      { path: 'add', component: PageAddCustomerComponent, canActivate: [AccessControlsGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
