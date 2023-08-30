import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/package/core/layout/layout.component';
import { LoginComponent } from 'src/package/modules/authentication/login/login.component';
import { DashboardModule } from 'src/package/modules/dashboard/dashboard.module';
import { DashboardComponent } from 'src/package/modules/dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      // { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      // { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
      // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      // { path: 'product/:id', component: ProductDetailsComponent },
      // { path: 'category/:categoryId', component: CategoryComponent },
    ]
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
