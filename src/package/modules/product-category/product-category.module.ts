import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryListComponent } from './components/sub-category-list/sub-category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    SubCategoryListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductCategoryModule { }
