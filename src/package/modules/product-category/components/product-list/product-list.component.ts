import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductFinal } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductFinal[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
