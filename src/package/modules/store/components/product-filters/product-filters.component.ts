import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { ProductFilter } from './product-filters.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {

  constructor(
    private global: GlobalConstant,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }
  public multiSelectFilter: ProductFilter[] = this.global.multiSelectFilter;

  ngOnInit(): void {
  }

  public multiSelectFilterChange(value: string, sectionId: string) {
    const queryParams = {...this.activatedRouter.snapshot.queryParams};

    const filterValue = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];
    const valueIndex = filterValue.indexOf(value);
    if (valueIndex > -1) {
      filterValue.splice(valueIndex, 1);
    } else {
      filterValue.push(value);
    }

    if (filterValue.length > 0) {
      queryParams[sectionId] = filterValue.join(",");
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], {queryParams});

  }

}
