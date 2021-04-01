import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoleUserEnum } from '../enums/role-user-enum.enum';

@Directive({
  selector: '[appManagementDisplayUser]'
})
export class ManagementDisplayUserDirective implements OnChanges {

  @Input() appManagementDisplayUser : RoleUserEnum;
  @HostBinding('class') className : string;

  constructor() { }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appManagementDisplayUser);
  }

  private formatClass(role: RoleUserEnum): string {
    if (role == RoleUserEnum.ADMIN || role == RoleUserEnum.SUPERADMIN) {
      return 'adminDisplay';
    } else if (role == RoleUserEnum.USER)  {
      return 'userDisplay';
    }
  }
}
