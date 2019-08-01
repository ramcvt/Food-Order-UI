import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly identityUrl:string ="https://hexa-customerapi.azurewebsites.net/api/customeridentity";
  //private readonly identityUrl:string ="http://localhost:5001/api/customeridentity";


  constructor(private http:HttpClient) { 

  }

  signup(user:any):Observable<any>{    
    return this.http.post(`${this.identityUrl}/register`,user);
  }

  validateUser(userlogin:any):Observable<any>{
    return this.http.post(`${this.identityUrl}/token`,userlogin);
  }
}
