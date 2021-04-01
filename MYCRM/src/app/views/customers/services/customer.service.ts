import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../../../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //private url : string = `${environment.urlMocks}customers`;
  private url: string = `${environment.urlApi}customers`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}`).pipe(
      map(datas => {
        return datas.map(objet => {
          return new Customer(objet);
        });
      })
    );
  }
  public getAllByFilter(etat: boolean): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}`).pipe(
      map(datas => {
        return datas.filter(datas => datas.active === etat).map(objet => {
          return new Customer(objet);
        });
      })
    )
  }

  /*public customerSearch(key: string): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}`).pipe(
      map(datas => {
        return datas.filter(datas => datas.firstname.toLowerCase() === key.toLowerCase() || datas.company.toLowerCase() === key.toLowerCase() || datas.lastname.toLowerCase() === key.toLowerCase()).map(objet => {
          return new Customer(objet);
          });
        })
      )
  }*/
  //Verion2
  public customerSearch(key: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}`).pipe(
      map(datas => {
        return datas.filter(datas => datas.firstname.toLowerCase().includes(key.toLowerCase())
          || datas.company.toLowerCase().includes(key.toLowerCase())
          || datas.lastname.toLowerCase().includes(key.toLowerCase())).map(objet => {
            return new Customer(objet);
          });
      })
    )
  }
  // add a customer using a customer form
  public createCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}`, newCustomer).pipe(
      map(data => {
        return new Customer(data);
      })
    );
  }

  public getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`).pipe(
      map(data => {
        return new Customer(data);
      })
    );
  }

  public edit(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.url}/${customer.id}`, customer).pipe(
      map(data => {
        return new Customer(data);
      })
    );
  }

  public delete(customer: Customer): Observable<Customer> { console.log(customer);
    return this.http.delete<Customer>(`${this.url}/${customer.id}`).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
