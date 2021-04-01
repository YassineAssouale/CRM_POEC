import { RoleUserEnum } from "../enums/role-user-enum.enum";
import { UserComplementsI } from "../interfaces/user-complements-i";
import { UserI } from "../interfaces/user-i";
import { User } from "./user";
import { UserComplements } from "./user-complements.model";

export class SuperUser implements UserI, UserComplementsI {
  id: number;
  username: string;
  password: string;
  mail: string;
  dateCreation: Date;
  dateLastConnexion: Date;
  role: RoleUserEnum = RoleUserEnum.USER;
  idUser: number;

  constructor (obj?: Partial<SuperUser>){
    if(obj){
      Object.assign(this,obj);
    }
  }
  setComplementsId(id: number) {
    this.idUser = id;
  }

  public setUser( obj? : Partial<User>){
    if (obj) {
      Object.assign(this, obj);
    }
  }

  public setUserComplements( obj? : Partial<UserComplements>){
    if (obj) {
      Object.assign(this, obj);
    }
  }

  public setRole(role: RoleUserEnum)  {
    this.role = role;
  }

  public setDateCreation(dateCreation: Date)  {
    this.dateCreation = dateCreation;
  }

}
