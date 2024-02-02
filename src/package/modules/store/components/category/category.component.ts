import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { ProductFinal } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public productList: ProductFinal[] = [];
  public categoryName: string = 'Shoes';
  public subCategories!: any[];

  constructor(
    private globalConstant: GlobalConstant,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productList = this.globalConstant.demoProductList;
    const category =this.router.snapshot.paramMap.get('id1');
    const category1 =this.router.snapshot.paramMap.get('id2');
    const category2 =this.router.snapshot.paramMap.get('id3');
    
    const topCategories = this.globalConstant.categoriesList;
    const categories = topCategories.filter(el => el.id === category)[0].subcategories;
    this.subCategories = categories.filter(el => el.id === category1)[0].subcategories;


  }

}
