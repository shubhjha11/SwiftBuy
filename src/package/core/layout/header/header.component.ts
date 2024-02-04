import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../../globalConstants/global-contant';
import { CategoryList } from 'src/package/modules/shared/model/product.model';

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
  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    this.menCategoryList = this.categoriesList.filter(cat => cat.id == 'men');
    this.womenCategoryList = this.categoriesList.filter(cat => cat.id == 'women');
  }
}
