import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
