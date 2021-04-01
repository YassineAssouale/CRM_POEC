import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    SharedModule
  ]
})
export class PagenotfoundModule { }
