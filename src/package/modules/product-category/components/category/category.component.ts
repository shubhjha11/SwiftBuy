import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public productList: any[] = [];
  public categoryName: string = 'Shoes';
  public subCategories: any[] = [
    {
      name: "Men's Shoes",
      subCategoryId: 1
    },
    {
      name: "Women's Shoes",
      subcategoryId: 2
    },
    {
      name: "Shoes for Baby Girls",
      subcategoryId: 2
    },
    {
      name: "Girls' Shoes",
      subcategoryId: 2
    },
    {
      name: "Shoes for Baby Boys",
      subcategoryId: 2
    },
    {
      name: "Boys' Shoes",
      subcategoryId: 2
    },
  ];

  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
    this.productList = this.globalConstant.productList;
  }

}
