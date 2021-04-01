import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'users', loadChildren: () => import('./views/users/users.module').then((m) => m.UsersModule)},
  { path: 'login', loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule)},
  { path: 'customers', loadChildren:() => import('./views/customers/customers.module').then((m) => m.CustomersModule)},
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then((m) => m.OrdersModule)},
  { path: 'account', loadChildren: () => import('./views/account/account.module').then((m) => m.AccountModule)},
  { path: '**', loadChildren: () => import('./views/pagenotfound/pagenotfound.module').then((m) => m.PagenotfoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
