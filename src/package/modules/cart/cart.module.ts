import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
