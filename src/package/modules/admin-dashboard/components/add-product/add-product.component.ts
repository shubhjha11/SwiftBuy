import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { SnackbarService } from 'src/package/core/services/snackbar.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productForm!: FormGroup;
  public categories = this.global.categoriesList;
  public selectedTopLevelCategory: any;
  public selectedSecondLevelCategory: any;
  @Output() addProductAction = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private global: GlobalConstant,
    private snackBarService: SnackbarService
    ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // images is a form array of product image
      productImages: this.fb.array([this.getImages()]),
      title: ['', Validators.required],
      brand: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      mrp: ['', Validators.required],
      description: ['', Validators.required],
      discount: ['', Validators.required],
      quantity: ['', Validators.required],
      topLevelCategory: ['', Validators.required],
      secondLevelCategory: ['', Validators.required],
      thirdLevelCategory: ['', Validators.required],
    });

    if(this.productForm) {
      // Listen for changes in the top-level category selection
      this.productForm.get('topLevelCategory')?.valueChanges.subscribe(selectedTopLevelCategoryId => {
        const selectedTopLevelCategory = this.categories.find(category => category.id === selectedTopLevelCategoryId);
        this.productForm.get('secondLevelCategory')?.setValue('');
        this.productForm.get('thirdLevelCategory')?.setValue('');
        this.selectedTopLevelCategory = selectedTopLevelCategory;
      });
  
      // Listen for changes in the second-level category selection
      this.productForm.get('secondLevelCategory')?.valueChanges.subscribe(selectedSecondLevelCategoryId => {
        const selectedSecondLevelCategory = this.selectedTopLevelCategory?.subcategories.find((category: { id: any; }) => category.id === selectedSecondLevelCategoryId);
        this.productForm.get('thirdLevelCategory')?.setValue('');
        this.selectedSecondLevelCategory = selectedSecondLevelCategory;
      });
    }
  }

  public getImages(): UntypedFormGroup {
    return this.fb.group({
      image: ['', Validators.required],
    });
  }

  public addImage() {
    this.productImages.push(this.getImages());
  }

  public removeImage(index: number) {
    this.productImages.removeAt(index);
  }

  get productImages() {
    return this.productForm.get("productImages") as UntypedFormArray;
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const action = {
        action: 'save',
        data: this.productForm.value
      }
      this.addProductAction.emit(action);
    } else {
      this.snackBarService.openSnackBar('Please fill all the required fields', 'error');
    }
  }

  onDiscard() {
    const action = {
      action: 'discard',
      data : null
    }
    this.addProductAction.emit(action);
  }
}
