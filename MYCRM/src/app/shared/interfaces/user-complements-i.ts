import { RoleUserEnum } from "../enums/role-user-enum.enum";

export interface UserComplementsI {
  id : number;
  idUser: number;
  dateCreation: Date;
  dateLastConnexion: Date;
  role: RoleUserEnum;

  setComplementsId(id : number);

}
