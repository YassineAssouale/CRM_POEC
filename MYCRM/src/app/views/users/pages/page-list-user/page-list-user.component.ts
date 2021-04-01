import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoleUserEnum } from 'src/app/shared/enums/role-user-enum.enum';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { User } from 'src/app/shared/models/user';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-list-user',
  templateUrl: './page-list-user.component.html',
  styleUrls: ['./page-list-user.component.scss']
})
export class PageListUserComponent implements OnInit {

  public titleUser: string = "Utilisateurs";
  public messageUser:string = "Recherche utilisateur";
  public tabLabels: string[] = [
    "#",
    "Nom d'utilisateur",
    "Mail",
    "Date de création",
    "Dernière connexion",
    "Rôle"
  ];

  public roles : string[] = Object.values(RoleUserEnum);
  public roleUserConnected : RoleUserEnum;

  public superUsersObs : Observable<SuperUser[]>;
  public filters: string[] = ["Administrateurs", "Utilisateurs", "Tous"];

  constructor(
    private userService: UserService,
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.superUsersObs = this.userService.getAllSuperUsers();
    this.userService.getUserComplementsById(Number(sessionStorage.getItem("id"))).subscribe(
      data => {
      this.roleUserConnected = data.role;
      if (this.roleUserConnected == RoleUserEnum.ADMIN || this.roleUserConnected == RoleUserEnum.SUPERADMIN) {
        this.tabLabels.push("Actions");
      }
      if (this.roleUserConnected == RoleUserEnum.SUPERADMIN){
        this.filters = ["SuperAdmin","Administrateurs", "Utilisateurs", "Tous"];
      }
      }
    );
  }

  public searchTerm(val: string): void {
    this.superUsersObs = this.userService.getSuperUserByUsernameOrMail(val);
  }

  public filterUser(value: string): void {
    switch(value){
      case "Utilisateurs":
        this.superUsersObs = this.userService.getSuperUserByRole(RoleUserEnum.USER);
        break;
      case "Administrateurs":
        this.superUsersObs = this.userService.getSuperUserByRole(RoleUserEnum.ADMIN);
        break;
      case "Tous":
        this.superUsersObs = this.userService.getAllSuperUsers();
        break;
      case "SuperAdmin":
        this.superUsersObs = this.userService.getSuperUserByRole(RoleUserEnum.SUPERADMIN);
        break;
      default :
        this.superUsersObs = this.userService.getAllSuperUsers();
        break;
    }
  }
  public redirectAdd(): void{
    this.router.navigate(['/users/add']);
  }
  public editUser(id: string): void{
    this.router.navigate(['/users/edit/'+ id]);
  }

  public deleteUser(id: number): void {
    console.log(id);

    this.userService.deleteUserComplements(id).subscribe(user =>
      this.userService.deleteUser(id).subscribe(
        data => {this.router.navigateByUrl('/users');
        this.superUsersObs = this.userService.getAllSuperUsers();}
      )
    );

  }

  public onIdClick(id) : void {
    if (this.authService.user.id === id)
      this.router.navigate(['/account']);
  }
}

