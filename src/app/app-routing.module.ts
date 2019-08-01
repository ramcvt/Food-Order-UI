import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { FoodCartComponent } from './components/food-cart/food-cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './guards/auth.guard';
import { OrdersComponent } from './components/orders/orders.component';




const routes: Routes = [
  { path:"",component:RestaurantListComponent},
  { path:"restaurant/:id",component:RestaurantDetailComponent},
  { path:"cart",component:FoodCartComponent,
      canActivate:[AuthGuard]},
  { path:"login",component:LoginComponent},
  { path:"signup",component:SignupComponent},
  { path:"orders",component:OrdersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
