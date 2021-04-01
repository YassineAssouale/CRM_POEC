import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RoleUserEnum } from 'src/app/shared/enums/role-user-enum.enum';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { User } from 'src/app/shared/models/user';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url: string = `${environment.urlMocks}users`;
  //private url: string = `${environment.urlApi}users`;
  private urlUserComplements: string = `${environment.urlMocks}usersComplements`;
  private urlLogin: string = `${environment.urlMocks}users/login`;

  public users: User[];
  public userComplements: UserComplements[];

  constructor(private http: HttpClient) {}

  public getAllSuperUsers(): Observable<SuperUser[]> {
    return this.http.get<SuperUser[]>(`${this.url}`).pipe(
      map((datas) => {
        return datas.map((user) => {
          let superUserFinal = new SuperUser(user);
          superUserFinal.idUser = user.id;
          this.getUserComplementsById(superUserFinal.idUser).subscribe(
            (userComplements: UserComplements) => {
                if (userComplements.idUser == superUserFinal.idUser) {
                  superUserFinal.idUser = userComplements.idUser;
                  superUserFinal.role = userComplements.role;
                  superUserFinal.dateCreation = userComplements.dateCreation;
                  superUserFinal.dateLastConnexion = userComplements.dateLastConnexion;
                }
            }
          );
          return superUserFinal;
        });
      })
    );
  }

  public getSuperUserById(id: number): Observable<SuperUser> {
    return this.http.get<SuperUser>(`${this.url}/${id}`).pipe(
      map((superUserData) => {
          let superUserFinal = new SuperUser(superUserData);
          superUserFinal.idUser = id;
          this.getUserComplementsById(superUserFinal.idUser).subscribe(
            (userComplements: UserComplements) => {
                if (userComplements.idUser == superUserFinal.idUser) {
                  superUserFinal.idUser = userComplements.idUser;
                  superUserFinal.role = userComplements.role;
                  superUserFinal.dateCreation = new Date(userComplements.dateCreation);
                  superUserFinal.dateLastConnexion = new Date(userComplements.dateLastConnexion);
                }
            }
          );
          return superUserFinal;
      })
    );
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      map(userData => new User(userData)));
  }

  public getUserComplementsById(id: number): Observable<UserComplements> {
    return this.http.get<UserComplements>(`${this.urlUserComplements}/${id}`).pipe(
      map(userComplementsData => new UserComplements(userComplementsData)));
  }

  public getUserIdByUsernameAndPassword(username: string, password: string): Observable<number> {
    return this.http.get<User>(`${this.urlLogin}/${username}&${password}`).pipe(
      map((JsonUser) => {
        let user = new User(JsonUser);
        return user.id;
      })
    );
  }

  public getSuperUserByRole(userRole: RoleUserEnum): Observable<SuperUser[]> {
    return this.http.get<SuperUser[]>(`${this.urlUserComplements}`).pipe(
      map((JsonUsersComplement) =>
        JsonUsersComplement
          .filter((JsonUserComplement) => JsonUserComplement.role === userRole)
          .map((JsonUserComplementFiltered) => {
          let superUserFinal = new SuperUser(JsonUserComplementFiltered);
          this.getUserById(superUserFinal.idUser).subscribe(
            (user: User) => {
                if (user.id == superUserFinal.idUser) {
                  superUserFinal.idUser = user.id;
                  superUserFinal.username = user.username;
                  superUserFinal.mail = user.mail;
                  superUserFinal.password = user.password;
                }
            }
          );
          return superUserFinal;
        })
      )
    );
  }

  public getSuperUserByUsernameOrMail(search: string): Observable<SuperUser[]> {
    return this.http.get<SuperUser[]>(`${this.url}`).pipe(
      map((datas) =>
        datas.filter((dataFilter) => dataFilter.username.toLowerCase().includes(search.toLowerCase()) || dataFilter.mail.toLowerCase().includes(search.toLowerCase()))
          .map((finalSuperUserData) => {
            let superUserFinal = new SuperUser(finalSuperUserData);
            this.getUserComplementsById(superUserFinal.id).subscribe(
              (userComplements: UserComplements) => {
                  if (userComplements.idUser == superUserFinal.id) {
                    superUserFinal.idUser = userComplements.idUser;
                    superUserFinal.role = userComplements.role;
                    superUserFinal.dateCreation = userComplements.dateCreation;
                    superUserFinal.dateLastConnexion = userComplements.dateLastConnexion;
                  }
              }
            );
            return superUserFinal;
          })
      )
    );
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}`, user).pipe(
      map(userData => {
        return new User(userData);
      })
    )
  }

  public addUserComplements(userComplements: UserComplements): Observable<UserComplements>{
    return this.http.post<UserComplements>(`${this.urlUserComplements}`, userComplements).pipe(
      map(userComplementsData => {
        let userC = new UserComplements(userComplementsData);
        return userC;
      })
    )
  }

  public userEdit(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/${user.id}`, user).pipe(
      map(userData => {
        return new User(userData);
      })
    )
  }

  public userComplementsEdit(userComplements: UserComplements): Observable<UserComplements>{
    return this.http.put<UserComplements>(`${this.urlUserComplements}/${userComplements.id}`, userComplements).pipe(
      map(userComplementsData => {
        return new UserComplements(userComplementsData);
      })
    )
  }

  public deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`).pipe(
      map(userData => {
        return new User(userData);
      })
    );
  }

  public deleteUserComplements(id: number): Observable<UserComplements>{
    return this.http.delete<UserComplements>(`${this.urlUserComplements}/${id}`).pipe(
      map(userData => {
        return new UserComplements(userData);
      })
    );
  }

}
