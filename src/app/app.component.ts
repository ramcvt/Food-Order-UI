import { Component } from '@angular/core';
import { GlobalsService } from './services/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userName:string = localStorage.getItem('cust-name');

  title = 'food-order';

  constructor(private global:GlobalsService) {
    
   }

   moveOut(){
     localStorage.removeItem('auth_token');
     localStorage.removeItem('cust-name');
     localStorage.removeItem('cust-email');
     localStorage.removeItem('cust-phone');
    //  localStorage.removeItem('cartitems');
     this.global.auth_token='';
     this.global.userName ='';
     this.global.userEmail='';
     this.global.userPhone='';

   }
}
