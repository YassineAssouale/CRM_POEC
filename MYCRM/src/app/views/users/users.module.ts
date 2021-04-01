import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { PageListUserComponent } from './pages/page-list-user/page-list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddSuperUserComponent } from './pages/page-add-super-user/page-add-super-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditSuperUserComponent } from './pages/page-edit-super-user/page-edit-super-user.component';
import { IconsModule } from 'src/app/icons/icons.module';


@NgModule({
  declarations: [PageListUserComponent, PageAddSuperUserComponent, PageEditSuperUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class UsersModule { }
