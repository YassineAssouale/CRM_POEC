import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from 'src/app/shared/enums/status-enum.enum';
import { TypeEnum } from 'src/app/shared/enums/type-enum.enum';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/views/customers/services/customer.service';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public formEditOrder : FormGroup;
  public status: string[] = Object.values(StatusEnum);
  public types: String[] = Object.values(TypeEnum);
  public customerObs : Observable<Customer[]>;
  public order :Order = new Order();

  constructor(private orderService :OrderService ,
    private formBuilder: FormBuilder,
    private serviceCustomer: CustomerService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.customerObs = this.serviceCustomer.getAll();
    this.route.paramMap.subscribe(param => {
      this.orderService.getOrderById(parseInt(param.get('id'))).subscribe(data =>  {
          this.order = data;
          this.builForm();
      })
    })
  }
  public editOrder():void{
    //this.order = new Order(this.formEditOrder.value);
    let id: number = this.order.id;
    this.order = new Order(this.formEditOrder.value);
    this.order.id = id;
    this.orderService.editOrder(this.order).subscribe(
      data => {
        if (data !== null) {
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/orders']);
          });
        }
      }
    );
  }

  public builForm(): void{
    this.formEditOrder = this.formBuilder.group({
      label:[this.order.label, Validators.compose(
        [Validators.required, Validators.maxLength(30)])],
      adrEt : [this.order.adrEt, Validators.max(750)],
      numberOfDays : [this.order.numberOfDays, Validators.required],
      tva : [this.order.tva, Validators.required],
      status : [this.order.status,Validators.required],
      type : [this.order.type,Validators.required],
      notes : [this.order.notes],
      customerId :[this.order.customerId, Validators.required]
    });
  }

}
