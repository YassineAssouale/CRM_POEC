import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from 'src/app/views/users/services/user.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public displayNavBar: boolean = false;

  constructor(private router: Router, public authService: AuthService, private userService: UserService) { }
  ngOnInit(): void {
  }

  public openNav() : void {
    this.displayNavBar = !this.displayNavBar;
  }

  public deconnexion() : void {
    //Mise à jour date de dernière connexion
    let userC = new UserComplements();
    userC.id = Number(sessionStorage.getItem("id"));
    this.userService.getUserComplementsById(userC.id).subscribe(
      (userComplements: UserComplements) => {
        if (userComplements.idUser === userC.id) {
          userC.id = userComplements.id;
          userC.idUser = userComplements.idUser;
          userC.role = userComplements.role;
          userC.dateCreation = userComplements.dateCreation;
          userC.dateLastConnexion = new Date();
          this.authService.saveUser(userC).subscribe(data => {
            console.log('tetstst')
            console.log(data)
            this.authService.isConnected = false;
            this.authService.user = null;
            this.authService.usernameProvider = null;
            this.authService.idProvider = null;
            this.authService.passwordProvider = null;
            sessionStorage.removeItem("id");
            this.router.navigateByUrl('/login');
          });
        }
      }
    );
  }

  public displayAccount(): void {
    this.router.navigateByUrl('/account');
  }
}
