import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductFinal } from '../../model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductFinal;
  constructor() { }

  ngOnInit(): void {
  }

}
