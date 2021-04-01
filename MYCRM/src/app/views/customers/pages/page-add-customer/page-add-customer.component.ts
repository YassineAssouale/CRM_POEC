import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-page-add-customer',
  templateUrl: './page-add-customer.component.html',
  styleUrls: ['./page-add-customer.component.scss']
})
export class PageAddCustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm(): void {
    this.customerForm = this.formBuilder.group({
      firstname:[this.customer.firstname, Validators.compose([Validators.required,Validators.maxLength(15)])],
      lastname:[this.customer.lastname, Validators.compose([Validators.required,Validators.maxLength(15)])],
      mobile:[this.customer.mobile],
      phone:[this.customer.phone , Validators.compose([Validators.required, Validators.pattern("(0)[1-9][0-9]{8}")])],
      company:[this.customer.company],
      mail:[this.customer.mail, Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      notes:[this.customer.notes],
      active:[this.customer.active]
    });
  }

  public addCustomer(): void {
    this.customer= new Customer(this.customerForm.value);
    this.customerService.createCustomer(this.customer).subscribe(
      data => {
        if (data !== null) {
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/customers']);
          });
        }
      }
    );

  }
}
