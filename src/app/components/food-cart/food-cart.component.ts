import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Orders } from 'src/app/models/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  public deliveryAddress:string;
  cartItems=[];
  restaurantName:string='';
  restaurantLocation:string='';
  public ordObj = new Orders(); 
  public paymentMode:string="card";
  public orders:Orders;
  public order:any;
  constructor(private cart:CartService,private orderSVC:OrderService,private router:Router) { }

  ngOnInit() {
    this.cartItems = this.cart.getItemsFromCart();
     this.order=this.cart.getItemsFromCart();
    if(this.cartItems){
      // this.restaurantName = this.cartItems.restname;
      // this.restaurantLocation = this.cartItems[0].restlocation;

    }
  }
  pay(){
    this.paymentMode="Card";
    this.ordObj.EmailID=this.order.emailID;
    this.ordObj.OrderDateTime=new Date().toLocaleDateString();
    this.ordObj.RestaurantName=this.order.restaurantName;
   //  this.ordObj.DeliveryAddress=this.order.deliveryAddress;
   //  this.ordObj.BillAmount=ord.billAmount;
    this.ordObj.PaymentMode=this.paymentMode;
    this.ordObj.orderItems=this.order.orderItems;
    this.ordObj.OrderStatus="";
 
    this.orders=this.ordObj;
 
    this.orderSVC.saveOrder(this.orders)
    .subscribe(
      result => { this.router.navigate(['/orders']) },
      err => { console.log("Error", err) }
    );
 
    this.router.navigate(['/orders'])
  }

}
