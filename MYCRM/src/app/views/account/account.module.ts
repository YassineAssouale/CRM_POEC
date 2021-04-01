import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { PageMyAccountComponent } from './pages/page-my-account/page-my-account.component';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [PageMyAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    UsersModule
  ]
})
export class AccountModule { }
