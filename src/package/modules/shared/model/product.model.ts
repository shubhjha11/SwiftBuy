export interface Product {
  productImages: ProductImage[];
  id: number,
  brand: string;
  title: string;
  color: string;
  price: number;
  mrp: number;
  discount: number;
  size: Size[];
  quantity: number;
  topLevelCategory: string;
  secondLevelCategory: string;
  thirdLevelCategory: string;
  description: string;
}

export interface Size {
  name: string;
  quantity: number;
}

export interface ProductImage {
  image: string;
}

export interface CategoryList {
  id: string;
  name: string;
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
  subcategories: Subsubcategory[];
}

export interface Subsubcategory {
  id: string;
  name: string;
  image: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
  totalDiscount: number;
}