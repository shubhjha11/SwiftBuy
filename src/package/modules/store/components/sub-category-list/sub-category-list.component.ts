import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {

  @Input() subCategories: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
