import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addItemtoCart(item){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    if(cartitems && cartitems.orderItems.length){
      cartitems.orderItems=[...cartitems.orderItems,...item.orderItems]
    }
    else
      cartitems =item;
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

  getItemsFromCart(){
    return JSON.parse(localStorage.getItem('cartitems'));
  }

  decrementItemCount(itemname){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    cartitems.orderItems.filter(x=>x.itemName==itemname).map(x=>x.quantity= x.quantity-1);
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

  incrementItemQuantity(itemname){
    var cartitems = JSON.parse(localStorage.getItem('cartitems'));
    cartitems.orderItems.filter(x=>x.itemName==itemname).forEach(element => {
      return element.quantity = ++ element.quantity;
    });

    localStorage.setItem('cartitems', JSON.stringify(cartitems));
  }

}
