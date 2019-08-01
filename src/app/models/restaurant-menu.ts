import { Menu } from './menu';

export class RestaurantMenu {
    public id:string;
    public name:string;
    public location:string;
    public imageUrl:string;
    public contact:number;
    public availability:string;
    public rating:number;

    public food:Menu[]
}
