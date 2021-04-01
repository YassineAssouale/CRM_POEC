import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Customer } from 'src/app/shared/models/customer';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/views/orders/services/order.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-page-list-customer',
  templateUrl: './page-list-customer.component.html',
  styleUrls: ['./page-list-customer.component.scss']
})
export class PageListCustomerComponent implements OnInit {

  public customerObsFilter : Observable<Customer[]>;
  public ordersObs : Order[];

  public messageClient: string = "Recherche client"
  public title: string = "Liste des Clients";
  public labels: string[] = [
    'N°',
    'Prénom',
    'Nom',
    'Société',
    'email',
    'Mobile',
    'Notes',
    'Tél.',
    'Actif'
  ];
  public titreCustomer: string = 'Clients';
  public filtersTab: string[] = ['Actifs ', 'Supprimés ', 'Tous'];

  public btnHrefTitle: string = "btnHref";
  public btnRouterLinkTitle: string = "btnRouterLinkTitle";
  public btnButtonTitle: string = "btnButtonTitle";

  public btnRouterLink: string = "/login";
  public btnButton: boolean;

  public buttonCardSlideName : string = "ENREGISTRER";

  constructor(private customerService : CustomerService, private orderService : OrderService, private router : Router, private authService : AuthService ){}

  ngOnInit(): void {
    console.log('NGONINIT')
    this.customerObsFilter = this.customerService.getAll();
  }

  public searchTerm(val :string): void {
    this.customerObsFilter = this.customerService.customerSearch(val);
  }

  public filterCustomerEtat(value : string): void {
    switch(value) {
      case 'Actifs ': this.customerObsFilter = this.customerService.getAllByFilter(true);
        break;
      case 'Supprimés ': this.customerObsFilter = this.customerService.getAllByFilter(false);
        break;
      case 'Tous': this.customerObsFilter = this.customerService.getAll();
        break;
      default: {
        console.log("erreur")
         break;
      }
   }
  }

  public deleteCustomer(customer: Customer): void {
    this.customerService.delete(customer).subscribe(dataToDelete => {
       this.orderService.getAllOrders().subscribe(datas => {
         for(let order of datas){
           if(order.customerId == dataToDelete.id){
             this.orderService.deleteOrderById(order.id).subscribe(
             )
           }
         }
        this.customerObsFilter = this.customerService.getAll()
        })
    })
  }

  public redirectAdd(): void{
    this.router.navigate(['/customers/add']);
  }

  public boolToString(bool : boolean): string {
    if(bool){
      return "ACTIF";
    } else {
      return "INACTIF";
    }
  }

  /* Output redirects */
  public edit(id : number) : void {
    this.authService.cardSlide = true;
    this.router.navigate([`/customers/edit/${id}`]);
  }

  public display(id : number) : void {
    this.authService.cardSlide = true;
    /* TODO : Configure a route and a displayPage for a precise Customer with all its infos */
  }

  public deleteX(customer : Customer) : void {
    this.customerService.delete(customer).subscribe();
    this.customerObsFilter = this.customerService.getAll();
  }

  public select(active : string, customer : Customer) : void {
    if(active === "ACTIF"){
      customer.active = true;
    } else {
      customer.active = false;
    }
    console.log(customer)
    this.customerService.edit(customer).subscribe(data => console.log(data));
  }

}
