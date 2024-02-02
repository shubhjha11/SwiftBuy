import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/package/core/layout/layout.component';
import { LoginComponent } from 'src/package/modules/authentication/components/login/login.component';
import { DashboardModule } from 'src/package/modules/dashboard/dashboard.module';
import { DashboardComponent } from 'src/package/modules/dashboard/components/dashboard/dashboard.component';
import { SignupComponent } from 'src/package/modules/authentication/components/signup/signup.component';
import { CartComponent } from 'src/package/modules/cart/components/cart/cart.component';
import { ProductDetailsComponent } from 'src/package/modules/store/components/product-details/product-details.component';
import { CategoryComponent } from 'src/package/modules/store/components/category/category.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'category/:id1/:id2/:id3', component: CategoryComponent },
    ]
  },
  { 
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => 
        import('src/package/modules/admin-dashboard/admin-dashboard.module')
        .then(m => m.AdminDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
