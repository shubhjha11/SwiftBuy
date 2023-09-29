import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { ProductFinal } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: ProductFinal;
  public selectedImage: string = "";
  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    this.product = this.globalConstant.productListFinal[0];
    this.selectedImage = this.product.imageUrls[0];
  }

  public selectImage(image: string): void {
    this.selectedImage = image;
  }
}
