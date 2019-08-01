import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit {

  public restaurants : Observable<Restaurant[]>

  constructor(private res:RestaurantService,private router:Router) { 
      this.restaurants = this.res.getRestaurants();
  }

  ngOnInit() {
    console.log(this.restaurants);
  }

  gotoRestaurant(resid:string){
    this.router.navigate(['/restaurant',resid]);
  }

 searchresta(key:string){
    if(key.trim().length > 0)
        this.restaurants = this.res.searchRestaurant(key);
    else
        this.restaurants = this.res.getRestaurants();
  }



}
