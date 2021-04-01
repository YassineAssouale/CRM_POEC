import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlsGuard } from 'src/app/core/services/guards/access-controls.guard';
import { PageMyAccountComponent } from './pages/page-my-account/page-my-account.component';

const routes: Routes = [{path : '', component : PageMyAccountComponent, canActivate:[AccessControlsGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
