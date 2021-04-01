import { StatusEnum } from "../enums/status-enum.enum";
import { TypeEnum } from "../enums/type-enum.enum";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{

  id : number;
  label : String;
  adrEt : number ;
  numberOfDays : number ;
  tva : number = 20 ;
  status : StatusEnum = StatusEnum.DEBUTANT;
  type : TypeEnum = TypeEnum.FORMATION;
  notes : String;
  customerId : number;

  constructor (obj?: Partial<Order>) {
    if (obj){
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    return this.adrEt*this.numberOfDays;
  }
  totalTtc(): number {
    return this.totalHt()*(1+(this.tva/100));
  }



}
