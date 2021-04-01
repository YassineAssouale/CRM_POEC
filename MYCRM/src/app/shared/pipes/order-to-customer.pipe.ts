import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from 'src/app/views/customers/services/customer.service';
import { Order } from '../models/order.model';

@Pipe({
  name: 'orderToCustomer'
})
export class OrderToCustomerPipe implements PipeTransform {

  constructor(private customerService : CustomerService){}

  transform(value: Order, ...args: unknown[]): Observable<string> {
    return this.customerService.getById(value.customerId).pipe(
      map(data => data.company)
    );
  }

}
