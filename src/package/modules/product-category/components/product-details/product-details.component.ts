import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { Product } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;

  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    this.product = this.globalConstant.productList[0];
  }
}
