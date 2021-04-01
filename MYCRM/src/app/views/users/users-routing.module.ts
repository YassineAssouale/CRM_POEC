import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddSuperUserComponent } from './pages/page-add-super-user/page-add-super-user.component';
import { AccessControlsGuard } from 'src/app/core/services/guards/access-controls.guard';
import { PageListUserComponent } from './pages/page-list-user/page-list-user.component';
import { PageEditSuperUserComponent } from './pages/page-edit-super-user/page-edit-super-user.component';

const routes: Routes = [
  {path : '',
    component : PageListUserComponent,
    canActivate:[AccessControlsGuard],
    children: [
      { path : 'edit/:id', component : PageEditSuperUserComponent, canActivate:[AccessControlsGuard] },
      { path : 'add', component : PageAddSuperUserComponent, canActivate:[AccessControlsGuard] }
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
