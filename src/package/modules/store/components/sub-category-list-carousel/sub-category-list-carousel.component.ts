import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subsubcategory } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-sub-category-list-carousel',
  templateUrl: './sub-category-list-carousel.component.html',
  styles: [
  ]
})
export class SubCategoryListCarouselComponent implements OnInit {

  @Input() subCategories: Subsubcategory[] | undefined;
  @Output() categorySelected = new EventEmitter<Subsubcategory>();
  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelect(subCategory: Subsubcategory) {
    this.categorySelected.emit(subCategory);
  }
}
