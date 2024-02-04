import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { CategoryList, ProductFinal, Subcategory, Subsubcategory } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public productList: ProductFinal[] = [];
  public selectedMainCategory!: CategoryList | undefined; //
  public selectedCategory!: Subcategory | undefined;
  public selectedSubCategory!: Subsubcategory | undefined;
  private subscriptions: Subscription[] = [];

  constructor(
    private globalConstant: GlobalConstant,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.activateRoute.params.subscribe(routeParams => {
      this.initializeCategoryData(routeParams);
    }));
  }

  public initializeCategoryData(params: Params) {
    this.productList = this.getAllProducts();

    // Extracting parameters from the route snapshot
    const genderCategoryParam = params['id1']; // 'men' or 'women'
    const categoryParam = params['id2'] // 'shoes', 'clothing', 'accessories', etc.
    const subCategoryParam = params['id3']; // In shoes: 'sports', 'casual', 'formal', etc.

    // Accessing the categoriesList from global constant
    const allCategories: CategoryList[] = this.getAllCategories();

    // Finding the selected gender category
    this.selectedMainCategory = allCategories.find(el => el.id === genderCategoryParam);

    // Finding the selected category
    this.selectedCategory = this.selectedMainCategory?.subcategories.find(el => el.id === categoryParam);

    // Extracting subcategories, if any
    if (subCategoryParam) {
      this.selectedSubCategory = this.selectedCategory?.subcategories.find(el => el.id === subCategoryParam);
    }
  }

  getProductsByCategory(category: string, subCategory: string) {
    return this.productList.filter(product => product.topLevelCategory === category);
  }

  getProductsBySubCategory(subCategory: string) {
    return this.productList.filter(product => product.thirdLevelCategory === subCategory);
  }

  getProductsByCategoryAndSubCategory(category: string, subCategory: string) {
    return this.productList.filter(product => product.topLevelCategory === category && product.thirdLevelCategory === subCategory);
  }

  getAllProducts(): ProductFinal[] {
    return this.globalConstant.demoProductList;
  }

  getAllCategories(): CategoryList[] {
    return this.globalConstant.categoriesList;
  }

  onCategorySelect(subCategory: Subsubcategory) {
    this.route.navigate([`/category/${this.selectedMainCategory?.id}/${this.selectedCategory?.id}/${subCategory.id}`]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
