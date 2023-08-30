import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductSliderComponent } from './category-product-slider.component';

describe('CategoryProductSliderComponent', () => {
  let component: CategoryProductSliderComponent;
  let fixture: ComponentFixture<CategoryProductSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
