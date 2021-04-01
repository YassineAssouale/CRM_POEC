import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoleUserEnum } from 'src/app/shared/enums/role-user-enum.enum';
import { StatusEnum } from 'src/app/shared/enums/status-enum.enum';
import { Order } from 'src/app/shared/models/order.model';
import { SuperUser } from 'src/app/shared/models/super-user.model';
import { UserComplements } from 'src/app/shared/models/user-complements.model';
import { UserService } from 'src/app/views/users/services/user.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public titleOrder: string = "Liste des Commandes";
  public tabLabels: string[] = [
    'N°',
    'Libellé',
    'TJM',
    'TVA',
    'Statut',
    'Notes',
    'Nb jours',
    'Total HT',
    'Total TTC',

  ];
  public ordersObs: Observable<Order[]>;
  public title: string = "Prestations";
  public messageOrder: string = "Recherche commande";
  public filters: string[] = ['Débutant', 'Confirmé', 'Expert', 'Tous'];
  public selection: string[] = Object.values(StatusEnum);
  public userComplements: UserComplements;
  public id: number;
  public attribute: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.ordersObs = this.orderService.getAllOrders();
  }

  public filter(value: string): void {
    switch (value) {
      case "Débutant":
        this.ordersObs = this.orderService.orderFilter(StatusEnum.DEBUTANT);
        break;
      case "Confirmé":
        this.ordersObs = this.orderService.orderFilter(StatusEnum.CONFIRME);
        break;
      case "Expert":
        this.ordersObs = this.orderService.orderFilter(StatusEnum.EXPERT);
        break;
      case "Tous":
        this.ordersObs = this.orderService.getAllOrders();
        break;
      default:
        this.ordersObs = this.orderService.getAllOrders();
        break;
    }
  }

  public select(status: StatusEnum, order: Order): void {
    this.orderService.updateStatus(status, order).subscribe(data => {
      console.log(data);
    });

  }

  public searchTerm(val: string): void {
    this.ordersObs = this.orderService.orderSearch(val);
  }

  public redirectAdd(): void {
    this.router.navigate(['/orders/add']);
  }

  public editOrder(id: number): void {
    this.authService.cardSlide = true;
    this.router.navigate([`/orders/edit/${id}`]);
  }

  public display(id: number): void {
    this.authService.cardSlide = true;
  }

  public deleteX(id: number): void {
    this.orderService.deleteOrderById(id).subscribe(dataComp => {
      if (dataComp) {
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/orders']);
        });
      }
    });
  }
}
