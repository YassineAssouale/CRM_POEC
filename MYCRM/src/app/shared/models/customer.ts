import { CustomerI } from "../interfaces/customer-i";

export class Customer implements CustomerI{
  id: number;
  lastname: string;
  firstname: string;
  active: boolean = false;
  company: string;
  mail: string;
  mobile: string;
  notes: string;
  phone: string;
  orders: any[] = [];

  constructor(obj?:Partial<Customer>){
    if(obj){
      Object.assign(this,obj);
    }
  }
}
