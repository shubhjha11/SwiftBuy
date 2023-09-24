import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryProductSliderComponent } from './components/category-product-slider/category-product-slider.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CategoryProductSliderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    CategoryProductSliderComponent,
  ]
})
export class SharedModule { }
