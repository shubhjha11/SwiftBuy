import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Product } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public readonly DELIVERY_CHARGE: number = 120;
  public cartItems: CartItem[] = [];
  public totalMrpAmount: number = 0;
  public totalDiscount: number = 0;
  public totalDiscountedAmount: number = 0;
  public deliveryCharge: number = 40;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.initializeAmounts();
      this.calculateTotalAmount();
    });
  }

  public initializeAmounts(): void {
    this.totalMrpAmount = 0;
    this.totalDiscount = 0;
    this.totalDiscountedAmount = 0;
    this.deliveryCharge = 0;
  }
  
  public calculateTotalAmount(): void {
    this.totalMrpAmount = this.cartItems.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);
    this.totalDiscountAmount();
    this.totalDiscountedAmount = this.totalMrpAmount - this.totalDiscount;
    this.calculateDeliveryCharge();
    this.totalDiscountedAmount += this.deliveryCharge;
  }

  public calculateDeliveryCharge(): void {
    this.deliveryCharge = this.totalDiscountedAmount >= 1000 ? 0 : this.DELIVERY_CHARGE;
  }

  public totalDiscountAmount() {
    this.totalDiscount = this.cartItems.reduce((acc, item) => {
      return acc + item.totalDiscount;
    }, 0);
  }

}
