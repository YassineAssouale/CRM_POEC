import { Directive, HostBinding, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoleUserEnum } from '../enums/role-user-enum.enum';

@Directive({
  selector: '[appUserIdConnected]'
})
export class UserIdConnectedDirective {

  @Input() appUserIdConnected : number;
  @HostBinding('class') className : string;

  constructor(private authService : AuthService) { }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appUserIdConnected);
  }

  private formatClass(id: number): string {
    if (Number(sessionStorage.getItem("id")) === id )
      return 'idDisplay';
  }

}
