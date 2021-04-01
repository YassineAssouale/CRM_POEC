import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusEnum } from 'src/app/shared/enums/status-enum.enum';
import { TypeEnum } from 'src/app/shared/enums/type-enum.enum';
import { Customer } from 'src/app/shared/models/customer';
import { Order } from 'src/app/shared/models/order.model';
import { CustomerService } from 'src/app/views/customers/services/customer.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public formOrder : FormGroup;
  public order :Order = new Order();
  public status: String[] = Object.values(StatusEnum);
  public types: String[] = Object.values(TypeEnum);
  public customerObs : Observable<Customer[]>;


  constructor(private serviceOrder :OrderService ,
    private formBuilder: FormBuilder,
    private serviceCustomer: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.builForm();
    this.customerObs = this.serviceCustomer.getAll();
  }

  public addOrder():void{
    this.order = new Order(this.formOrder.value);
    this.serviceOrder.addOrder(this.order).subscribe(
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
    this.formOrder = this.formBuilder.group({
      label:[this.order.label, Validators.compose(
        [Validators.required, Validators.maxLength(30)])],
      adrEt : [this.order.adrEt, Validators.max(750)],
      numberOfDays : [this.order.numberOfDays, Validators.required],
      tva : [this.order.tva, Validators.required],
      status : [this.order.status],
      type : [this.order.type],
      notes : [this.order.notes],
      customerId :[this.order.customerId, Validators.required]
    });
  }
  public customerRedirect(): void{
    this.router.navigate(['/orders']);
  }
}
