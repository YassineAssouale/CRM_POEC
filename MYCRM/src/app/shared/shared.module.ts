import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { IconsModule } from '../icons/icons.module';
import { DisplayTaxesPipe } from './pipes/display-taxes.pipe';
import { ConnectedUserPipe } from './pipes/connected-user.pipe';
import { OrderHtColorDirective } from './directives/order-ht-color.directive';
import { ManagementDisplayUserDirective } from './directives/management-display-user.directive';
import { OrderToCustomerPipe } from './pipes/order-to-customer.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDisplayDirective } from './directives/customer-display.directive';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { CardSlideComponent } from './components/card-slide/card-slide.component';
import { TemplateSelectionComponent } from './components/template-selection/template-selection.component';
import { UserIdConnectedDirective } from './directives/user-id-connected.directive';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { SelectBackgroundColorDirective } from './directives/select-background-color.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    HeaderPageComponent,
    CardComponent,
    DisplayTaxesPipe,
    ConnectedUserPipe,
    OrderHtColorDirective,
    ManagementDisplayUserDirective,
    OrderToCustomerPipe,
    CustomerDisplayDirective,
    TemplateSelectionComponent,
    UserIdConnectedDirective,
    PageTemplateComponent,
    CardSlideComponent,
    TemplateSelectionComponent,
    CardFooterComponent,
    SelectBackgroundColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    ReactiveFormsModule

  ],
  exports: [
    ButtonComponent,
    TableComponent,
    HeaderPageComponent,
    CardComponent,
    DisplayTaxesPipe,
    ConnectedUserPipe,
    OrderHtColorDirective,
    ManagementDisplayUserDirective,
    OrderToCustomerPipe,
    CustomerDisplayDirective,
    TemplateSelectionComponent,
    UserIdConnectedDirective,
    PageTemplateComponent,
    CardSlideComponent,
    TemplateSelectionComponent,
    CardFooterComponent
  ]
})
export class SharedModule { }
