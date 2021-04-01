import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { ViewsModule } from '../views/views.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    IconsModule,
    ViewsModule
  ], exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
