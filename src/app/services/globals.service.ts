import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  public userName:string;
  public auth_token:string;
  public userEmail:string;
  public userPhone:string;

  constructor() {
    this.userName = localStorage.getItem("cust-name");
    this.auth_token = localStorage.getItem("auth_token");
    this.userEmail= localStorage.getItem("cust-email");
    this.userPhone = localStorage.getItem("cust-phone");
   }
}
