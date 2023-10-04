import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { ProductFinal, ProductImage } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: ProductFinal;
  public selectedImage!: ProductImage;
  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    this.product = this.globalConstant.demoProductList[2];
    this.selectedImage = this.product.productImages[0];
  }

  public selectImage(image: ProductImage): void {
    this.selectedImage = image;
  }
}
