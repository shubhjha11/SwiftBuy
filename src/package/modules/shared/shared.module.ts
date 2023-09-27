import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryProductSliderComponent } from './components/category-product-slider/category-product-slider.component';
import { Router, RouterModule } from '@angular/router';
import { ImageZoomDirective } from './directives/image-zoom.directive';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CategoryProductSliderComponent,
    ImageZoomDirective,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    CategoryProductSliderComponent,
    ProductCardComponent,
    ImageZoomDirective,
    PaginationComponent
  ]
})
export class SharedModule { }
