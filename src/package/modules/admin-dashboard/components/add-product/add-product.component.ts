import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { GlobalConstant } from 'src/package/core/globalConstants/global-contant';
import { SnackbarService } from 'src/package/core/services/snackbar.service';
import { Product } from 'src/package/modules/shared/model/product.model';

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
  @Input() selectedProduct: Product[] = [];

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
      discount: { value: 0, disabled: true },
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

       // Listen for changes in Price and MRP fields
        this.productForm.get('price')?.valueChanges.subscribe(() => {
          this.updateDiscount();
        });

        this.productForm.get('mrp')?.valueChanges.subscribe(() => {
          this.updateDiscount();
        });
    }
    if(this.selectedProduct.length > 0) {
      this.setProductData();
    }
  }

  // Function to calculate and update the Discount field
  updateDiscount() {
    const price = this.productForm.get('price')?.value;
    const mrp = this.productForm.get('mrp')?.value;

    if (price !== null && mrp !== null && price > 0 && mrp > 0 && price <= mrp) {
      const discount = ((mrp - price) / mrp) * 100;
      this.productForm.get('discount')?.setValue(discount.toFixed(2));
    } else {
      this.productForm.get('discount')?.setValue(0);
    }
  }

  public setProductData(): void {
    const selectedProduct = this.selectedProduct[0];
    this.productForm.patchValue(selectedProduct);
    this.productForm.get('topLevelCategory')?.setValue(selectedProduct.topLevelCategory.toLowerCase());
    this.selectedTopLevelCategory = this.categories.find(category => category.id === selectedProduct.topLevelCategory.toLowerCase());
    this.selectedSecondLevelCategory = this.selectedTopLevelCategory?.subcategories.find((category: { id: any; }) => category.id === selectedProduct.secondLevelCategory.toLowerCase());
    this.productForm.get('secondLevelCategory')?.setValue(selectedProduct.secondLevelCategory.toLowerCase());
    this.productForm.get('thirdLevelCategory')?.setValue(selectedProduct.thirdLevelCategory.toLowerCase());
    this.productForm.setControl('productImages', this.setExistingImages(selectedProduct.productImages));
  }

  public setExistingImages(imageSets: any): UntypedFormArray {
    const formArray = new UntypedFormArray([]);
    imageSets.forEach((imageSet: any) => {
      formArray.push(this.fb.group({
        image: imageSet.image,
      }));
    });
    return formArray;
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
      this.snackBarService.openSnackBar('Please fill correct product details.', 'error');
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
