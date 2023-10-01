import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OrderGridComponent } from './components/order-grid/order-grid.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductGridComponent,
    AddProductComponent,
    AdminDashboardComponent,
    OrderGridComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule
  ]
})
export class AdminDashboardModule { }
