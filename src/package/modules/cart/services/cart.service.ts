import { Injectable } from '@angular/core';
import { CartItem, Product } from '../../shared/model/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor() { }

  addToCart(cartItem: CartItem): void {
    const existingItemIndex = this.cartItems.findIndex(item => this.isSameCartItem(item, cartItem));

    if (existingItemIndex !== -1) {
      // If the same item already exists in the cart, update the quantity
      this.cartItems[existingItemIndex].quantity += cartItem.quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      this.cartItems.push(cartItem);
    }

    this.updateCartItemsSubject();
  }

  removeFromCart(cartItem: CartItem): void {
    const indexToRemove = this.cartItems.findIndex(item => this.isSameCartItem(item, cartItem));

    if (indexToRemove !== -1) {
      this.cartItems.splice(indexToRemove, 1);
      this.updateCartItemsSubject();
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  private updateCartItemsSubject(): void {
    this.calculateTotalPrice();
    this.cartItemsSubject.next([...this.cartItems]); // Emit a new copy of the cart items
  }

  private calculateTotalPrice(): void {
    this.cartItems.forEach((item) => {
      item.totalPrice = item.product.mrp * item.quantity;
      item.totalDiscount = (item.product.mrp - item.product.price) * item.quantity;
    });
  }

  private isSameCartItem(item1: CartItem, item2: CartItem): boolean {
    return (
      item1.product.id === item2.product.id
    );
  }

  public updateCartItems(cartItems: CartItem[]): void {
    this.cartItems = cartItems;
    this.updateCartItemsSubject();
  }

  public isProductInCart(productId: number): boolean {
    return this.cartItems.some(item => item.product.id === productId);
  }
}
