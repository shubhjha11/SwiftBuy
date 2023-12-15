export interface Product {
  name: string;
  images: string[];
  description: string;
  price: string;
  brand: string;
  productId: number;
  subCategory: string;
  category: string;
}
export interface ProductFinal {
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
  id: string
  name: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  image1: string
  image: string
  subcategories: Subcategory2[]
}

export interface Subcategory2 {
  id: string
  name: string
}