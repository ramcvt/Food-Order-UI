import { OrdItems } from './ord-items';

export interface Iorder {
    emailID:string;
    restaurantName:string;
    // deliveryAddress:string;
    // billAmount:number;
    paymentMode:string;
    restid:string;
    restlocation:string;
    orderItems:OrdItems[];
}
