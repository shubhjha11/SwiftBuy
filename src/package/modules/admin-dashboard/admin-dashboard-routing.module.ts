import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OrderGridComponent } from './components/order-grid/order-grid.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    children: [
      {
        path: "analytics",
        component: AnalyticsComponent,
      },
      {
        path: "products",
        component: ProductGridComponent
      },
      {
        path: "orders",
        component: OrderGridComponent
      },
      {
        path: "",
        redirectTo: "analytics",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
