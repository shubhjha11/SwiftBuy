import { Injectable } from "@angular/core";
import { Product } from "src/package/modules/shared/model/product.model";

@Injectable()
export class GlobalConstant {
  productList: Product[] = [
    {
      name: "Shoe 1",
      image: "./../../../../assets/images/product/men-shoe.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, sem diam aliquet nunc, eget faucibus velit nunc quis nunc.",
      price: "230",
      brand: "Red Tape",
      category: "Shoes",
      productId: 1,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 2",
      image: "./../../../../assets/images/product/men-shoe.jpg",
      description: "",
      price: "450",
      brand: "Red Tape",
      category: "Shoes",
      productId: 2,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 3",
      image: "./../../../../assets/images/product/men-shoe.jpg",
      description: "",
      price: "899",
      brand: "Red Tape",
      category: "Shoes",
      productId: 3,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 4",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "599",
      brand: "Red Tape",
      category: "Shoes",
      productId: 4,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 5",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "499",
      brand: "Red Tape",
      category: "Shoes",
      productId: 5,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 6",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "499",
      brand: "Red Tape",
      category: "Shoes",
      productId: 6,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 7",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "999",
      brand: "Red Tape",
      category: "Shoes",
      productId: 7,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 8",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "899",
      brand: "Red Tape",
      category: "Shoes",
      productId: 8,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 9",
      image: "./../../../../assets/images/product/women-shoe.jpg",
      description: "",
      price: "672",
      brand: "Red Tape",
      category: "Shoes",
      productId: 9,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 10",
      image: "./../../../../assets/images/product/men-shoe.jpg",
      description: "",
      price: "345",
      brand: "Red Tape",
      category: "Shoes",
      productId: 10,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 11",
      image: "./../../../../assets/images/product/men-shoe.jpg",
      description: "",
      price: "1120",
      brand: "Red Tape",
      category: "Shoes",
      productId: 11,
      subCategory: "Men's Shoes"
    }
  ];

  categoryList = [
    {
      name: "Shoes",
      image: "./../../../../assets/images/category/shoes.webp",
      categoryId: 1
    },
    {
      name: "Home Appliance",
      image: "./../../../../assets/images/category/appliance.webp",
      categoryId: 1
    },
    {
      name: "Accessories",
      image: "./../../../../assets/images/category/accessories.webp",
      categoryId: 3
    },
    {
      name: "Watches",
      image: "./../../../../assets/images/category/watches.webp",
      categoryId: 2
    },
    {
      name: "Electronics",
      image: "./../../../../assets/images/category/electronics.webp",
      categoryId: 5
    },
    {
      name: "Mobile",
      image: "./../../../../assets/images/category/mobile.webp",
      categoryId: 4
    }
  ];
}