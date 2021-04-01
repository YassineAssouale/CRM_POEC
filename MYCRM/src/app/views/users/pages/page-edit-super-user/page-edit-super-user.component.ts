import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleUserEnum } from 'src/app/shared/enums/role-user-enum.enum';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { User } from 'src/app/shared/models/user';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-edit-super-user',
  templateUrl: './page-edit-super-user.component.html',
  styleUrls: ['./page-edit-super-user.component.scss']
})
export class PageEditSuperUserComponent implements OnInit {

  public superUserEditForm : FormGroup;
  public roles : string[] = Object.values(RoleUserEnum);
  public superUserObs : Observable<SuperUser>;
  public user : User = new User();
  public userComplements : UserComplements = new UserComplements();
  public date : Date = new Date();
  public currentSuperUserId : number;
  public currentCreationDate : Date;
  public superUser : SuperUser;

  constructor(
    private userService : UserService,
    private formBuilder : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
    ) {}

  ngOnInit(): void {

    this.superUserEditForm = new FormGroup({
      username: new FormControl(),
      password : new FormControl(),
      mail: new FormControl(),
      role: new FormControl()
    });

    this.route.paramMap.subscribe(param => {
      this.currentSuperUserId = parseInt(param.get('id'));
      this.superUserObs = this.userService.getSuperUserById(parseInt(param.get('id')));
      this.superUserObs = this.userService.getSuperUserById(parseInt(param.get('id')));
      this.superUserFormBuilder();
    });
  }

  public superUserFormBuilder () {
    this.superUserObs.subscribe(superUserData => {
      this.userService.getUserComplementsById(superUserData.id).subscribe(userComplementsData => {
        this.userComplements.dateCreation = userComplementsData.dateCreation;
        this.userComplements.dateLastConnexion = userComplementsData.dateLastConnexion;
        this.superUserEditForm = this.formBuilder.group({
          username : [superUserData.username, Validators.required],
          password : [superUserData.password, Validators.compose([Validators.required, Validators.minLength(8)])],
          mail:[superUserData.mail, Validators.compose([Validators.required, Validators.pattern("^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$")])],
          role : [superUserData.role],
        });
      });
    });
  }

  public editSuperUser() : void {

    this.user.id = this.currentSuperUserId;
    this.user.username = this.superUserEditForm.value.username;
    this.user.mail = this.superUserEditForm.value.mail;
    this.user.password = this.superUserEditForm.value.password;

    this.userComplements.id = this.currentSuperUserId;
    this.userComplements.idUser = this.currentSuperUserId;
    this.userComplements.role = this.superUserEditForm.value.role;

    this.userService.userEdit(this.user).subscribe(data => {
      this.userComplements.idUser = data.id;
      this.userService.userComplementsEdit(this.userComplements).subscribe(dataComp =>{
        if(dataComp){
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/users']);
          });
        }
      });
    });
  }

}
