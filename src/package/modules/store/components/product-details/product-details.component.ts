import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { CartService } from 'src/package/modules/cart/services/cart.service';
import { Product, ProductImage } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;
  public selectedImage!: ProductImage;
  constructor(
    private globalConstant: GlobalConstant,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId: string = this.activateRouter.snapshot.paramMap.get('id')!;
    this.product = this.globalConstant.demoProductList.find(el => el.id === Number(productId))!;
    this.selectedImage = this.product.productImages[0];
  }

  public selectImage(image: ProductImage): void {
    this.selectedImage = image;
  }

  public addToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      product: this.product,
      quantity: 1,
      totalPrice: this.product.mrp,
      totalDiscount: this.product.discount
    });
    // navigate to cart page
    this.router.navigate(['/cart']);
  }

  public goToCart(): void {
    this.router.navigate(['/cart']);
  }

  // check if product is in cart
  public isProductInCart(): boolean {
    return this.cartService.isProductInCart(this.product.id);
  }
}
