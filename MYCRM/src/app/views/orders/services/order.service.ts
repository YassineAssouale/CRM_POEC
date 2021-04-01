import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StatusEnum } from 'src/app/shared/enums/status-enum.enum';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url : string = `${environment.urlMocks}orders`;
  //private url : string = `${environment.urlApi}orders`;

  constructor(private http : HttpClient) { }

  public getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}`).pipe(map(datas =>{ return datas.map(objet => {return new Order(objet);});}));
  }

  public deleteOrderById(id: number): Observable<Order>{
    return this.http.delete<Order>(`${this.url}/${id}`).pipe(
      map(data =>{
        return new Order(data);
        }
      )
    );
  }

  public getOrderById(id : number): Observable<Order>{
    return this.http.get<Order>(`${this.url}/${id}`).pipe(
      map(objet =>
         new Order(objet)
      )
    );
  }

  public getOrderByStatus(status : string): Observable<Order>{
    return this.http.get<Order>(`${this.url}?id=${status}`).pipe(
      map(objet => {
        return new Order(objet);
      })
    );
  }

  public addOrder(order : Order): Observable<Order>{
    return this.http.post<Order>(`${this.url}`, order).pipe(
      map(objet => {
        return new Order(objet);
      })
    );
  }

  public editOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}/${order.id}`, order).pipe(
      map(data => {
        return new Order(data);
      })
    );
  }


  public updateStatus( status: StatusEnum , order : Order): Observable<Order>{
    order.status = status;
    return this.editOrder(order);
  }

  public orderFilter(status: StatusEnum): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}`).pipe(
      map(orderDatas =>
        orderDatas.filter(filteredData => filteredData.status === status)
        .map(finalData => {return new Order(finalData)})));
  }

  public orderSearch(search : string): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}`).pipe(
      map(orderDatas =>
        orderDatas.filter(filteredData => filteredData.label.toLowerCase().includes( search.toLowerCase()))
        .map(finalData => {return new Order(finalData)})));
  }
  public deleteOrder(id: number): Observable<Order> {

    return this.http.delete<Order>(`${this.url}/${id}`).pipe(
      map(data => {
        return new Order(data);
      })
    );
  }

}
