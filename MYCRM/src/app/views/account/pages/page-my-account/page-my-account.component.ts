import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/views/users/services/user.service';

@Component({
  selector: 'app-page-my-account',
  templateUrl: './page-my-account.component.html',
  styleUrls: ['./page-my-account.component.scss']
})
export class PageMyAccountComponent implements OnInit {

  //public user : User;
  public userObs : Observable<SuperUser>;

  constructor(private userService : UserService, private authService : AuthService) { }

  ngOnInit(): void {
    this.userObs = this.userService.getSuperUserById(this.authService.user.id);
   /* this.userService.getById(2).subscribe(
      data => {
        this.user = data;
      }
    )*/
  }
}
