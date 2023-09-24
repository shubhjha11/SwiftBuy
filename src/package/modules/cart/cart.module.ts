import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
