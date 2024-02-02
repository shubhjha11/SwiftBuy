import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private globalConstant: GlobalConstant,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId: string = this.router.snapshot.paramMap.get('id')!;
    this.product = this.globalConstant.demoProductList.find(el => el.id === Number(productId))!;
    this.selectedImage = this.product.productImages[0];
  }

  public selectImage(image: ProductImage): void {
    this.selectedImage = image;
  }
}
