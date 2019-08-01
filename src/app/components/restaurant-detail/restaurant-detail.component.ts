import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantMenu } from 'src/app/models/restaurant-menu';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';
import { CartService } from 'src/app/services/cart.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  private id:string;
  public resdetails:RestaurantMenu;
  public mainMenu:string[];
  public fullMenu:Menu[];
  public selectedItem:string;
  public hideerror:boolean=true;
  constructor(private route:ActivatedRoute,private resSVC:RestaurantService,private router:Router,private cart:CartService,private globals:GlobalsService) {
    this.id = this.route.snapshot.params["id"];
   }

  ngOnInit() {
   
    this.resSVC.getRestaurant(this.id).subscribe(
      (x)=> {
        this.resdetails = x;

        this.mainMenu = this.resdetails.food.map(x=>x.type).filter((item, i, ar) => ar.indexOf(item) === i);
        this.fullMenu = this.resdetails.food.filter(x=>x.type==this.mainMenu[0]).map(obj=> (
          { ...obj, qty: 0 }));
        this.selectedItem = this.mainMenu[0];
      }
    );
  }

  menuitemclick(m){
    this.selectedItem =m;
    this.fullMenu = this.resdetails.food.filter(x=>x.type==m).map(obj=> ({ ...obj, qty: 0 }));
     
  }

  AddToCart(item){
    this.hideerror = false;
    if(this.globals.auth_token){
      var cartItem ={
        emailID:this.globals.userEmail,
        restid : this.resdetails.id,
        restaurantName : this.resdetails.name,
        restlocation: this.resdetails.location,
        orderItems:[ { itemName :item.dish,
                    quantity : 1,
                  price:item.price
                }]
                
      }
      item.qty=1;
      this.cart.addItemtoCart(cartItem);
    
    }
    else{
     if(confirm("Please login before adding to the cart"))
       this.router.navigate(['\login']);
      
  }
   
    //this.routerus.navigate(['\cart']);
  }

  incrementItemQuantity(item){
    item.qty=item.qty + 1;
    this.cart.incrementItemQuantity(item.dish);
  }

  decrementItemFromCart(item){
    item.qty=item.qty - 1;
    this.cart.decrementItemCount(item.dish);
  }
}
