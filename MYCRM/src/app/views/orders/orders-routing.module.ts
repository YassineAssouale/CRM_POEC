import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlsGuard } from 'src/app/core/services/guards/access-controls.guard';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';


const routes: Routes = [
  {
    path: '', component : PageListOrderComponent, canActivate:[AccessControlsGuard],
    children: [
      { path: 'edit/:id', component : PageEditOrderComponent, canActivate:[AccessControlsGuard] },
      { path: 'add', component : PageAddOrderComponent, canActivate:[AccessControlsGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
