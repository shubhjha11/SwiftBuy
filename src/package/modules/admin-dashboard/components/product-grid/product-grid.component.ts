import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { Product } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'image', 'title_brand', 'price_mrp_discount', 'quantity', 'topLevelCategory', 'category'];
  public dataSource: MatTableDataSource<Product> = new MatTableDataSource(this.globalConstant.demoProductList);
  public isAddProduct: boolean = false;
  public showEditProduct: boolean = false;
  public selectedProduct: Product[] = [];
  public showDeleteProduct: boolean = false;
  constructor(
    private globalConstant: GlobalConstant
  ) { }


  ngOnInit(): void {
  }

  public addProduct(): void {
    this.isAddProduct = true;
  }

  public addProductAction(event: {action: string, data: Product}): void {
    this.isAddProduct = false;
    this.selectedProduct = [];
    this.showDeleteProduct = false;
    this.showEditProduct = false;
    if (event.action === 'save') {
      this.dataSource.data = [...this.dataSource.data, event.data];
    }
  }

  public getSelectedProduct(event: any, row:any): void {
    if(event.checked) {
      this.selectedProduct.push(row);
    } else {
      this.selectedProduct = this.selectedProduct.filter((item: Product) => item.id !== row.id);
    }
    this.showDeleteProduct = this.selectedProduct.length > 0;
    this.showEditProduct = this.selectedProduct.length === 1;
  }

  public editProduct(): void {
    this.isAddProduct = true;
  }

  public deleteProduct(): void {
    
  }

}
