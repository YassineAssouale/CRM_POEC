import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Pipe({
  name: 'displayValue'
})
export class DisplayValuePipe implements PipeTransform {

  transform(value: Customer, ...args: unknown[]): string {
    if(!args){
      return null;
    }
    else if(args[0]=== "mobile" ){
      //TODO
      if(value.mobile !==null){
        return  value.mobile.substring(0, 2) + " "
        + value.mobile.substring(2, 4) + " "
        + value.mobile.substring(4, 6) + " "
        + value.mobile.substring(6, 8) + " "
        + value.mobile.substring(8, 10);
      }
    }
    else if(args[0]=== "phone" && value.phone !==null){
      return  value.phone.substring(0, 2) + " "
      + value.phone.substring(2, 4) + " "
      + value.phone.substring(4, 6) + " "
      + value.phone.substring(6, 8) + " "
      + value.phone.substring(8, 10);
    }
    else if(args[0]=== "f_l_name" && value.firstname !==null && value.lastname !==null){
      return value.firstname.charAt(0).toUpperCase()
      + value.firstname.substring(1)
      + " " + value.lastname.toUpperCase();
    }
    //TODO : Add active button
    else if(args[0]=== "active"){
      if(value.active){
        return "Client actif" ;
      }else{
        return "Client inactif" ;
      }
    }

    else{return "le pipe fonctionne !";}
  }

}
