import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/package/core/layout/layout.component';
import { LoginComponent } from 'src/package/modules/authentication/components/login/login.component';
import { DashboardModule } from 'src/package/modules/dashboard/dashboard.module';
import { DashboardComponent } from 'src/package/modules/dashboard/components/dashboard/dashboard.component';
import { SignupComponent } from 'src/package/modules/authentication/components/signup/signup.component';
import { CartComponent } from 'src/package/modules/cart/components/cart/cart.component';
import { ProductDetailsComponent } from 'src/package/modules/product-category/components/product-details/product-details.component';
import { CategoryComponent } from 'src/package/modules/product-category/components/category/category.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
