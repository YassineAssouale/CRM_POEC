import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'displayTaxes'
})
export class DisplayTaxesPipe implements PipeTransform {

  transform(order: Order, ...args: unknown[]): string {
    if (!args) {
      return "0";
    } else if (args[0] == 'HT') {
      return (order.totalHt()).toString();
    } else if (args[0] == 'TTC') {
      return (order.totalTtc()).toString();
    } else return "0";
  };

}
