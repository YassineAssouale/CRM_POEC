import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from 'src/app/views/users/services/user.service';
import { BLOCK_MARKER } from '@angular/localize/src/utils';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public user: User = new User();
  public formLogin: FormGroup;
  public submitted: boolean = false;
  public emptyForm: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService) {
    // redirect to home if already logged in
    if (this.authService.user) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.buildFormLogin();
  }

  public buildFormLogin(): void {
    this.formLogin = this.formBuilder.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required]

    })
  }

  public connexion(): void {
    if (this.formLogin.value.username != null && this.formLogin.value.password != null) {
      this.authService.getUserByUsernameAndPassword(this.formLogin.value.username, this.formLogin.value.password).subscribe(data => {
        this.user = data[0];
        if (this.user != null) {
          this.authService.user = this.user;
          this.authService.isConnected = true;

          //Mise à jour date de dernière connexion
          let userC = new UserComplements();
          userC.id = Number(this.user.id);
          this.userService.getUserComplementsById(userC.id).subscribe(
            (userComplements: UserComplements) => {
              if (userComplements.idUser == userC.id) {
                userC.id = userComplements.id;
                userC.idUser = userComplements.idUser;
                userC.role = userComplements.role;
                userC.dateCreation = userComplements.dateCreation;
                userC.dateLastConnexion = new Date();
                this.authService.saveUser(userC).subscribe(data => {
                  this.submitted = true;
                  sessionStorage.setItem("id", this.user.id.toString());
                  this.authService.userCObs = this.userService.getUserComplementsById(userC.id);
                  this.router.navigateByUrl('/orders');
                });
              }
            }
          );
        } else {
          this.submitted = true;
          this.emptyForm = false;
          this.formLogin.reset();
        }
      });
    } else {
      this.emptyForm = true;
      this.submitted = false;
    }
  }
}
