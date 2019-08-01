import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Orders } from 'src/app/models/orders';
import { Iorder } from 'src/app/models/iorder';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public Orders;
  public selOrder;

  constructor(private ordersSVC:OrderService,private cartSvc:CartService,private router:Router,private globals:GlobalsService) { }

  ngOnInit() {
    this.ordersSVC.getOrder(this.globals.userEmail).subscribe((res)=>{
      this.Orders = res;
    }
      
     );
  }
  public selectOrder(order){
    this.selOrder = order;
  }

}
