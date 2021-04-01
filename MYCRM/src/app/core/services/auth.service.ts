import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { SuperUser } from 'src/app/shared/models/super-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isConnected: boolean;
  public user: User;
  public userC: UserComplements;
  public userComplete: Observable<SuperUser>;
  public userCObs: Observable<UserComplements>;
  public usernameProvider: string;
  public passwordProvider: string;
  public idProvider: number;
  public cardSlide : boolean = false;

  //private url: string = `${environment.urlMocks}users`;
  private url: string = `${environment.urlApi}users`;
  private urlComplements: string = `${environment.urlApi}usersComplements`;

  constructor(private http: HttpClient) { }

  public getUserByUsernameAndPassword(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.url}?username=${username}&password=${password}`).pipe(
      map(data => {
        return new User(data);
      }));
  }

  // add last connexion date
  public saveUser(newUser: UserComplements): Observable<UserComplements> {
     return this.http.put<UserComplements>(`${this.urlComplements}/${newUser.id}`, newUser).pipe(
      map(data => {
        return new UserComplements(data);
      })
    );
  }

}
