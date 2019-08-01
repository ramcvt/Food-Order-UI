import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly OrderApiUrl:string="https://foodorderonline-orderapi.azurewebsites.net/api/order";
   //private readonly OrderApiUrl:string="http://localhost:5003/api/order";

  constructor(private http:HttpClient) { }

  public getOrder(userEmail){
    return this.http.get(`${this.OrderApiUrl}/${userEmail}`);
  }

  public saveOrder(order:Orders):Observable<Orders>{
    return this.http.post<Orders>(this.OrderApiUrl,order);
  }
}
