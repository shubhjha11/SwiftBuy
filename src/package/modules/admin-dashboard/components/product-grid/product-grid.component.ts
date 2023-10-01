import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { ProductFinal } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'title_brand', 'price_mrp_discount', 'quantity', 'topLevelCategory', 'category'];
  public dataSource: MatTableDataSource<ProductFinal> = new MatTableDataSource(this.globalConstant.demoProductList);
  public isAddProduct: boolean = false;
  constructor(
    private globalConstant: GlobalConstant
  ) { }


  ngOnInit(): void {
  }

  public addProduct(): void {
    this.isAddProduct = true;
  }

  public addProductAction(event: {action: string, data: ProductFinal}): void {
    this.isAddProduct = false;
    if (event.action === 'save') {
      this.dataSource.data = [...this.dataSource.data, event.data];
    }
  }

}
