import { RoleUserEnum } from "../enums/role-user-enum.enum";
import { UserComplementsI } from "../interfaces/user-complements-i";

export class UserComplements implements UserComplementsI {
  id : number;
  idUser: number;
  dateCreation: Date;
  dateLastConnexion: Date;
  role: RoleUserEnum = RoleUserEnum.USER;

  constructor (obj?: Partial<UserComplements>){
    if(obj){
      Object.assign(this,obj);
    }
  }
  setComplementsId(id: number) {
    this.idUser = id;
  }

}
