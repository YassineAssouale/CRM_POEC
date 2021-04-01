import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/views/users/services/user.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessControlsGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isConnected) {
      return this.authService.isConnected;

    } else if (sessionStorage.getItem("id") !== null) {
      console.log('CONNECTED SESSION STORAGE')
      this.userService.getUserComplementsById(Number(sessionStorage.getItem("id"))).subscribe(data => {
        this.authService.userC = data;
        this.authService.isConnected = true;
        this.authService.userCObs = this.userService.getUserComplementsById(Number(sessionStorage.getItem("id")));
        return this.authService.isConnected;
      })

    } else {
      this.router.navigate(["/login"]);
    }
  }
}
