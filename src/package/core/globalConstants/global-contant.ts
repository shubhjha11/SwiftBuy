import { Injectable } from "@angular/core";
import { Product } from "src/package/modules/shared/model/product.model";

@Injectable()
export class GlobalConstant {
  productList: Product[] = [
    {
      name: "TIMBERLAND Men Work Boots Rigmaster 8' Steel-Toe Waterproof Brown 11W-US/10.5UK",
      images: [
        "./../../../../assets/images/product/men-shoe.jpg",
        "./../../../../assets/images/product/men-shoe.jpg",
        "./../../../../assets/images/product/men-shoe.jpg"
      ],
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, sem diam aliquet nunc, eget faucibus velit nunc quis nunc.",
      price: "1499.99",
      brand: "TIMBERLAND ",
      category: "Shoes",
      productId: 1,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 2",
      images: [
        "./../../../../assets/images/product/men-shoe.jpg",
      ],
      description: "",
      price: "450",
      brand: "Red Tape",
      category: "Shoes",
      productId: 2,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 3",
      images: [
        "./../../../../assets/images/product/men-shoe.jpg",
      ],
      description: "",
      price: "899",
      brand: "Red Tape",
      category: "Shoes",
      productId: 3,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 4",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "599",
      brand: "Red Tape",
      category: "Shoes",
      productId: 4,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 5",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "499",
      brand: "Red Tape",
      category: "Shoes",
      productId: 5,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 6",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "499",
      brand: "Red Tape",
      category: "Shoes",
      productId: 6,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 7",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "999",
      brand: "Red Tape",
      category: "Shoes",
      productId: 7,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 8",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "899",
      brand: "Red Tape",
      category: "Shoes",
      productId: 8,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 9",
      images: [
        "./../../../../assets/images/product/women-shoe.jpg",
      ],
      description: "",
      price: "672",
      brand: "Red Tape",
      category: "Shoes",
      productId: 9,
      subCategory: "Women's Shoes"
    },
    {
      name: "Shoe 10",
      images: [
        "./../../../../assets/images/product/men-shoe.jpg",
      ],
      description: "",
      price: "345",
      brand: "Red Tape",
      category: "Shoes",
      productId: 10,
      subCategory: "Men's Shoes"
    },
    {
      name: "Shoe 11",
      images: [
        "./../../../../assets/images/product/men-shoe.jpg",
      ],
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
      categoryId: 2
    },
    {
      name: "Accessories",
      image: "./../../../../assets/images/category/accessories.webp",
      categoryId: 3
    },
    {
      name: "Watches",
      image: "./../../../../assets/images/category/watches.webp",
      categoryId: 4
    },
    {
      name: "Electronics",
      image: "./../../../../assets/images/category/electronics.webp",
      categoryId: 5
    },
    {
      name: "Mobile",
      image: "./../../../../assets/images/category/mobile.webp",
      categoryId: 6
    }
  ];

  productListFinal = [
    {
      "imageUrls": [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/j/e/-original-imagmuc8gfb7heya.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/p/4/-original-imagmuc8mfwfszr2.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/3/j/-original-imagmuc8j5vjdfz2.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/k/c/-original-imagmuc8duqhf7as.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/6/0/u/-original-imagmuc8swzgrh6y.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/3/p/x/-original-imagmuc847qfjgua.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/5/n/-original-imagmuc8mvhmgdyn.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/x/n/10-6g-842-10-campus-wht-pro-blue-original-imag7j84fpg3z2sv-bb.jpeg?q=70"
      ],
      "brand": "CAMPUS",
      "title": "HURRICANE Running Shoes For Men  (White)",
      "color": "White",
      "price": 889,
      "mrp": 1399,
      "discount": 36,
      "size": [
        {
          "name": "S",
          "quantity": 20
        },
        {
          "name": "M",
          "quantity": 30
        },
        {
          "name": "L",
          "quantity": 50
        }
      ],
      "quantity": 100,
      "topLevelCategory": "Men",
      "secondLevelCategory": "Shoes",
      "thirdLevelCategory": "Sports Shoes",
      "description": "The breathable mesh upper of these shoes for men ensures comfortable feet with optimal air circulation. Their versatile design seamlessly complements both formal and casual outfits, be it for work or college. Embrace their support during outdoor activities like yoga, running, jogging, or brisk walking. The lightweight material ensures all-day ease for your feet! Shoes' Outsole- The Anti-Slip outsole design of the running shoes provides you with a strong grip. They are designed to provide the utmost support and make for a reliable pair of shoes for men. Shoes' Insole- Embrace the personalized fit offered by the Memory Foam insole, perfectly adapting to your foot shape while providing exceptional arch support. Whether walking or running, the cushioned insole guarantees a luxurious and tailor-made experience."
    }
  ]
}