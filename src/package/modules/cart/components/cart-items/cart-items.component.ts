import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/package/modules/shared/model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  @Input() cartItems: CartItem[] = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  public increaseProductQuantity(cartItem: CartItem): void {
    this.cartItems.forEach((item) => {
      if (item.id === cartItem.id) {
        item.quantity++;
      }
    });
    this.updateCartItems();
  }

  public reduceProductQuantity(cartItem: CartItem): void {
    this.cartItems.forEach((item) => {
      if (item.id === cartItem.id) {
        item.quantity--;
      }
    });
    this.updateCartItems();
  }

  public removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
  }

  public updateCartItems(): void {
    this.cartService.updateCartItems(this.cartItems);
  }

}
