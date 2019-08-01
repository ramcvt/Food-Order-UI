import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantMenu } from 'src/app/models/restaurant-menu';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

 private readonly resApiUrl:string="https://hexa-restaurantapi.azurewebsites.net/api/restaurant";
  //private readonly resApiUrl:string="http://localhost:5000/api/restaurant";


  constructor(private http:HttpClient) {

   }

   public getRestaurants():Observable<Restaurant[]>{
     return  this.http.get<Restaurant[]>(this.resApiUrl)
   }
   
   public getRestaurant(restaurantID:string):Observable<RestaurantMenu>{
    return  this.http.get<RestaurantMenu>(`${this.resApiUrl}/${restaurantID}`);
  }
  
  public searchRestaurant(searchKey:string):Observable<Restaurant[]>{
    return  this.http.get<Restaurant[]>(`${this.resApiUrl}/search/${searchKey}`);
  }

}
