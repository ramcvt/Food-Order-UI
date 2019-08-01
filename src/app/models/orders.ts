import { OrdItems } from './ord-items';

export class Orders {
    public id:string;
    public EmailID:string;
    public OrderDateTime:string;
    public RestaurantName:string;
    public OrderStatus:string;
    public DeliveryAddress:string;
    public BillAmount:number;
    public PaymentMode:string;
    public orderItems:OrdItems[];
}
