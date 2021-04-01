import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAccountComponent } from './icon-account/icon-account.component';
import { IconLoginComponent } from './icon-login/icon-login.component';
import { IconBarMenuComponent } from './icon-bar-menu/icon-bar-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconConnexionComponent } from './icon-connexion/icon-connexion.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconCustomersComponent } from './icon-customers/icon-customers.component';
import { IconOrdersComponent } from './icon-orders/icon-orders.component';
import { IconUsersComponent } from './icon-users/icon-users.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconDisplayComponent } from './icon-display/icon-display.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';

@NgModule({
  declarations: [
    IconAccountComponent,
    IconLoginComponent,
    IconBarMenuComponent,
    IconConnexionComponent,
    IconEditComponent,
    IconCustomersComponent,
    IconOrdersComponent,
    IconUsersComponent,
    IconCloseComponent,
    IconDisplayComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    IconAccountComponent,
    IconBarMenuComponent,
    IconLoginComponent,
    IconConnexionComponent,
    IconEditComponent,
    IconCustomersComponent,
    IconOrdersComponent,
    IconUsersComponent,
    IconCloseComponent,
    IconDisplayComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
