import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryListComponent } from './components/sub-category-list/sub-category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';


@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFiltersComponent,
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    SharedModule
  ]
})
export class ProductCategoryModule { }
