import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';

@Component({
  selector: 'app-popular-category',
  templateUrl: './popular-category.component.html',
  styleUrls: ['./popular-category.component.scss']
})
export class PopularCategoryComponent implements OnInit {

  public categories = this.globalConstant.categoryList;
  constructor(
    private globalConstant: GlobalConstant
  ) { }

  ngOnInit(): void {
  }

}
