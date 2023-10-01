import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';

@Component({
  selector: 'app-popular-category',
  templateUrl: './popular-category.component.html',
  styleUrls: ['./popular-category.component.scss']
})
export class PopularCategoryComponent implements OnInit {

  public menCategories: any;
  public womenCategories: any;
  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    const categories = this.globalConstant.categoriesList;
    this.menCategories = categories[0].subcategories;
    this.womenCategories = categories[1].subcategories;
  }

}
