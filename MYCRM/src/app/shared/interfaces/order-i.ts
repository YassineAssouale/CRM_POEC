import { StatusEnum } from "../enums/status-enum.enum";
import { TypeEnum } from "../enums/type-enum.enum";

export interface OrderI {

  id : number;
  label : String;
  adrEt : number ;
  numberOfDays : number;
  tva : number;
  status : StatusEnum;
  type : TypeEnum;
  notes : String;
  customerId : number;

  totalHt () : number;

  totalTtc () : number;

}
