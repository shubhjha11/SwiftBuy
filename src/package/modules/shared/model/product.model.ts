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
  imageUrls: string[];
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