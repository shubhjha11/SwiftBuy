import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryListComponent } from './components/sub-category-list/sub-category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCategoryRoutingModule } from './store-routing.module';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { SubCategoryListCarouselComponent } from './components/sub-category-list-carousel/sub-category-list-carousel.component';


@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFiltersComponent,
    SubCategoryListCarouselComponent,
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
