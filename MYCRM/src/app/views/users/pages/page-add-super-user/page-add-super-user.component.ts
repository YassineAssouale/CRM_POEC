import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleUserEnum } from 'src/app/shared/enums/role-user-enum.enum';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { User } from 'src/app/shared/models/user';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-add-super-user',
  templateUrl: './page-add-super-user.component.html',
  styleUrls: ['./page-add-super-user.component.scss']
})
export class PageAddSuperUserComponent implements OnInit {

  public superUserForm : FormGroup;
  public roles : string[] = Object.values(RoleUserEnum);
  public superUser : SuperUser = new SuperUser();
  public user : User = new User();
  public userComplements : UserComplements = new UserComplements();
  public date : Date = new Date();

  constructor(
    private userService : UserService,
    private formBuilder : FormBuilder,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.superUserFormBuilder();
  }

  public superUserFormBuilder () {
    this.superUserForm = this.formBuilder.group({
      username : [this.superUser.username, Validators.required],
      password : [this.superUser.password, Validators.compose([Validators.required, Validators.minLength(8)])],
      mail:[this.superUser.mail, Validators.compose([Validators.required, Validators.pattern("^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$")])],
      role : [this.superUser.role]
    })
  }


  public addUser() : void {
    this.user = new User(this.superUserForm.value);
    this.userComplements = new UserComplements(this.superUserForm.value);

    this.userService.addUser(this.user).subscribe(data => {
      this.userComplements.idUser = data.id;
      let date: Date = new Date();
      this.userComplements.dateCreation = date;
      this.userService.addUserComplements(this.userComplements).subscribe(dataComp => {
        if (dataComp) {
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/users']);
          });
        }
      });
    });
  }
}
