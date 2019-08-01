import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate { 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('auth_token'))
      return true;
    else {
      if(confirm("Please login before moving to the cart"))
          this.router.navigate(['/login']);
      return false;
    }
  }

constructor(private router:Router) { }
}

  

