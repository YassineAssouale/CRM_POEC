import {UserI} from "../interfaces/user-i";
export class User implements UserI{
  id: number;
  username: string;
  password: string;
  mail: string;

  constructor (obj?: Partial<User>){
    if(obj){
      Object.assign(this,obj);
    }
  }
}
