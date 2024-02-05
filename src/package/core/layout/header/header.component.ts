import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../../globalConstants/global-contant';
import { CategoryList } from 'src/package/modules/shared/model/product.model';
import { CartService } from 'src/package/modules/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean = false;
  public isAdmin: boolean = true;
  public categoriesList: CategoryList[] = this.globalConstant.categoriesList;
  public menCategoryList!: CategoryList[];
  public womenCategoryList!: CategoryList[];
  public cartItems: number = 0;

  constructor(
    private globalConstant: GlobalConstant,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.menCategoryList = this.categoriesList.filter(cat => cat.id == 'men');
    this.womenCategoryList = this.categoriesList.filter(cat => cat.id == 'women');
    this.getCartItems();
  }

  public getCartItems(): void {
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems.length;
    });
  }
}
