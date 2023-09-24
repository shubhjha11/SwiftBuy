import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PopularCategoryComponent } from './components/popular-category/popular-category.component';
import { CarouselBannerComponent } from './components/carousel-banner/carousel-banner.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PopularCategoryComponent,
    CarouselBannerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
