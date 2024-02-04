import { Injectable } from "@angular/core";
import { CategoryList, Product } from "src/package/modules/shared/model/product.model";

@Injectable()
export class GlobalConstant {

  demoProductList = [
    {
      "productImages": [
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/j/e/-original-imagmuc8gfb7heya.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/p/4/-original-imagmuc8mfwfszr2.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/3/j/-original-imagmuc8j5vjdfz2.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/k/c/-original-imagmuc8duqhf7as.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/6/0/u/-original-imagmuc8swzgrh6y.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/3/p/x/-original-imagmuc847qfjgua.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/5/n/-original-imagmuc8mvhmgdyn.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/x/n/10-6g-842-10-campus-wht-pro-blue-original-imag7j84fpg3z2sv-bb.jpeg?q=70" }
      ],
      "brand": "CAMPUS",
      "title": "HURRICANE Running Shoes For Men  (White)",
      "id": 1,
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
      "thirdLevelCategory": "Sports",
      "description": "The breathable mesh upper of these shoes for men ensures comfortable feet with optimal air circulation. Their versatile design seamlessly complements both formal and casual outfits, be it for work or college. Embrace their support during outdoor activities like yoga, running, jogging, or brisk walking. The lightweight material ensures all-day ease for your feet! Shoes' Outsole- The Anti-Slip outsole design of the running shoes provides you with a strong grip. They are designed to provide the utmost support and make for a reliable pair of shoes for men. Shoes' Insole- Embrace the personalized fit offered by the Memory Foam insole, perfectly adapting to your foot shape while providing exceptional arch support. Whether walking or running, the cushioned insole guarantees a luxurious and tailor-made experience."
    },
    {
      "productImages": [
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/e/8/t/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszheg3m66vs6.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/b/v/r/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszherf7mzrhz.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/g/z/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszhefhbztdmy.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/t/o/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszheyjamy4eg.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/h/g/j/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszhezdfjmgwe.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/3/p/x/-original-imagmuc847qfjgua.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/o/e/x/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszheujmkzdeg.jpeg?q=70" },
        { image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/j/g/6-fw23fd267-7-reebok-pure-grey-4r-black-original-imagszher3kfgkxk.jpeg?q=70" },
      ],
      "brand": "REEBOK",
      "title": "Super Speed Running Shoes For Men  (Grey)",
      "id": 2,
      "color": "Grey",
      "price": 1231,
      "mrp": 2499,
      "discount": 50,
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
      "thirdLevelCategory": "Sports",
      "description": `The breathable mesh upper of these shoes for men ensures comfortable feet with optimal air circulation. Their versatile design seamlessly complements both formal and casual outfits, be it 
        for work or college. Embrace their support during outdoor activities like yoga, running, jogging, or brisk walking. The lightweight material ensures all-day ease for your feet! Shoes' Outsole- The Anti-Slip
        outsole design of the running shoes provides you with a strong grip. They are designed to provide the utmost support and make for a reliable pair of shoes for men. Shoes' Insole- Embrace the personalized fit 
        offered by the Memory Foam insole, perfectly adapting to your foot shape while providing exceptional arch support. Whether walking or running, the cushioned insole guarantees a luxurious and tailor-made experience.`
    },
    {
      "productImages": [
        { image: "https://m.media-amazon.com/images/I/71vgrQNoGZL._UY695_.jpg" },
        { image: "https://m.media-amazon.com/images/I/71U7OrlljFL._UY695_.jpg" },
        { image: "https://m.media-amazon.com/images/I/71DMiHJzQEL._UY695_.jpg" },
        { image: "https://m.media-amazon.com/images/I/71JFiOCxKIL._UY695_.jpg" },
        { image: "https://m.media-amazon.com/images/I/81nTuT1150L._UY695_.jpg" },
      ],
      "brand": "Red Tape",
      "title": "Red Tape Men Ankle Length Boots",
      "id": 3,
      "color": "Brown",
      "price": 1899,
      "mrp": 7599,
      "discount": 75,
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
      "thirdLevelCategory": "Casual",
      "description": `THIS MEN'S ANKLE LENGTH BOOTS IS FOR: This Shoes Gives All-Day Comfort And Relaxation At The Feet And Keeps You Active All Day Long
        FEATURES: Closure - Zipper | Fit Type - Regular BENEFITS: Men's Zip-Up Ankle Length Boots Is Designed For Utmost Comfort With TPR Sole. It Provides
        Dynamic Feet Support, Arch Support, Slip- Resistance For Negating Accidental Falls, Firm Grip & Stability`
    },
  ];

  categoriesList: CategoryList[] = [
    {
      "id": "men",
      "name": "Men",
      "subcategories": [
        {
          "id": "clothing",
          "name": "Clothing",
          "image": "https://m.media-amazon.com/images/G/31/img21/MA2023/june/WRS/ethinc/halo/New_Season._CB587544226_.png",
          "subcategories": [
            { "id": "shirts", "name": "Shirts", "image": "https://i.ebayimg.com/thumbs/images/g/5vcAAOSwn55e7xmT/s-l225.webp" },
            { "id": "jeans", "name": "Jeans", "image": "https://i.ebayimg.com/thumbs/images/g/b9IAAOSwu0Fe7xmd/s-l225.webp" },
            { "id": "jackets", "name": "Jackets", "image": "https://i.ebayimg.com/thumbs/images/g/hg8AAOSwAoFbarSF/s-l225.webp" },
            { "id": "trousers", "name": "Trousers", "image": "https://i.ebayimg.com/thumbs/images/g/dKkAAOSwu2Re7xmR/s-l225.webp" },
            { "id": "suits", "name": "Suits", "image": "https://i.ebayimg.com/thumbs/images/g/gssAAOSwOahe7xmM/s-l225.webp" }
          ]
        },
        {
          "id": "shoes",
          "name": "Shoes",
          "image": "https://m.media-amazon.com/images/G/31/img21/shoes/2023/2.0/Women/Halo/Mens._CB578759497_.png",
          "subcategories": [
            { "id": "formal", "name": "Formal", "image": "https://i.ebayimg.com/thumbs/images/g/lq4AAOSwIsFdct~d/s-l225.webp" },
            { "id": "casual", "name": "Casual", "image": "https://i.ebayimg.com/thumbs/images/g/B1wAAOSwdGZcPPAW/s-l225.webp" },
            { "id": "sports", "name": "Sports", "image": "https://i.ebayimg.com/thumbs/images/g/r5QAAOSw8U9cPPAS/s-l225.webp" },
            { "id": "sneakers", "name": "Sneakers", "image": "https://i.ebayimg.com/thumbs/images/g/~kMAAOSwwkVdct4L/s-l225.webp" },
            { "id": "loafers", "name": "Loafers", "image": "https://i.ebayimg.com/thumbs/images/g/5NgAAOSw7VJdct4R/s-l225.webp" },
            { "id": "boots", "name": "Boots", "image": "https://i.ebayimg.com/thumbs/images/g/AxkAAOSwLKNb0hDY/s-l225.webp" }
          ]
        },
        {
          "id": "watches",
          "name": "Watches",
          "image": "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Men._SS400_QL85_.jpg",
          "subcategories": [
            { "id": "analog", "name": "Analog", "image": "https://i.ebayimg.com/thumbs/images/g/i9cAAOSwxDVfUOsZ/s-l225.webp" },
            { "id": "digital", "name": "Digital", "image": "https://i.ebayimg.com/thumbs/images/g/bZgAAOSwyxhfUOsS/s-l225.webp" },
            { "id": "chronograph", "name": "Chronograph", "image": "https://i.ebayimg.com/thumbs/images/g/dkwAAOSwxlJfUOsV/s-l225.webp" },
            { "id": "luxury", "name": "Luxury", "image": "https://i.ebayimg.com/thumbs/images/g/tC0AAOSwBqpfUOsy/s-l225.webp" },
            { "id": "sports", "name": "Sports", "image": "https://i.ebayimg.com/thumbs/images/g/jOQAAOSwG0NfUOsd/s-l225.webp" }
          ]
        },
        {
          "id": "accessories",
          "name": "Accessories",
          "image": "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/sunglasses_unselected._SS300_QL85_FMpng_.png",
          "subcategories": [
            { "id": "belts", "name": "Belts", "image": "https://i.ebayimg.com/thumbs/images/g/yxMAAOSwZ4dZJXhi/s-l225.webp" },
            { "id": "ties", "name": "Ties", "image": "https://i.ebayimg.com/thumbs/images/g/QAIAAOSw09Ve7xmP/s-l225.webp" },
            { "id": "wallets", "name": "Wallets", "image": "https://i.ebayimg.com/thumbs/images/g/ZJUAAOSwJJJe7xmW/s-l225.webp" },
            { "id": "hats", "name": "Hats", "image": "https://i.ebayimg.com/thumbs/images/g/xZEAAOSw7P1e7xmL/s-l225.webp" },
            { "id": "sunglasses", "name": "Sunglasses", "image": "https://i.ebayimg.com/thumbs/images/g/3lwAAOSwtP9e7xmV/s-l225.webp" }
          ]
        }
      ]
    },
    {
      "id": "women",
      "name": "Women",
      "subcategories": [
        {
          "id": "clothing",
          "name": "Clothing",
          "image": "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Women__unselected._SS300_QL85_FMpng_.png",
          "subcategories": [
            { "id": "dresses", "name": "Dresses", "image": "https://i.ebayimg.com/thumbs/images/g/XsUAAOSwe-5e7xmi/s-l225.webp" },
            { "id": "tops", "name": "Tops", "image": "https://i.ebayimg.com/thumbs/images/g/cGcAAOSwrHNe7xmi/s-l225.webp" },
            { "id": "skirts", "name": "Skirts", "image": "https://i.ebayimg.com/thumbs/images/g/FpAAAOSwEfZe7xmZ/s-l225.webp" },
            { "id": "sweater", "name": "Sweaters", "image": "https://i.ebayimg.com/thumbs/images/g/TEsAAOSwPJxe7xmR/s-l225.webp" },
            { "id": "jeans", "name": "Jeans", "image": "https://i.ebayimg.com/thumbs/images/g/FPoAAOSwPGNe7xmd/s-l225.webp" },
            { "id": "jackets", "name": "Jackets", "image": "https://i.ebayimg.com/thumbs/images/g/0V4AAOSwqShe7xmW/s-l225.webp" }
          ]
        },
        {
          "id": "footwear",
          "name": "Footwear",
          "image": "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Footwear_unselected._SS300_QL85_FMpng_.png",
          "subcategories": [
            { "id": "heels", "name": "Heels", "image": "https://i.ebayimg.com/thumbs/images/g/ERwAAOSwP4ldctrl/s-l225.webp" },
            { "id": "flats", "name": "Flats", "image": "https://i.ebayimg.com/thumbs/images/g/dTEAAOSwXMBdctwV/s-l225.webp" },
            { "id": "boots", "name": "Boots", "image": "https://i.ebayimg.com/thumbs/images/g/BygAAOSwlRFdctTE/s-l225.webp" },
            { "id": "sandals", "name": "Sandals", "image": "https://i.ebayimg.com/thumbs/images/g/qw0AAOSwq9hdcts0/s-l225.webp" },
            { "id": "sneakers", "name": "Sneakers", "image": "https://i.ebayimg.com/thumbs/images/g/DWAAAOSwq2xcPOv0/s-l225.webp" },
            { "id": "athletic", "name": "Athletic", "image": "https://i.ebayimg.com/thumbs/images/g/YDoAAOSwKqldctTM/s-l225.webp" }
          ]
        },
        {
          "id": "watches",
          "name": "Watches",
          "image": "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Watches_unselected._SS300_QL85_FMpng_.png",
          "subcategories": [
            { "id": "analog", "name": "Analog", "image": "https://i.ebayimg.com/thumbs/images/g/i9cAAOSwxDVfUOsZ/s-l225.webp" },
            { "id": "digital", "name": "Digital", "image": "https://i.ebayimg.com/thumbs/images/g/bZgAAOSwyxhfUOsS/s-l225.webp" },
            { "id": "chronograph", "name": "Chronograph", "image": "https://i.ebayimg.com/thumbs/images/g/dkwAAOSwxlJfUOsV/s-l225.webp" },
            { "id": "luxury", "name": "Luxury", "image": "https://i.ebayimg.com/thumbs/images/g/tC0AAOSwBqpfUOsy/s-l225.webp" },
            { "id": "sports", "name": "Sports", "image": "https://i.ebayimg.com/thumbs/images/g/jOQAAOSwG0NfUOsd/s-l225.webp" }
          ]
        },
        {
          "id": "accessories",
          "name": "Accessories",
          "image": "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Jewellery_unselected._SS300_QL85_FMpng_.png",
          "subcategories": [
            { "id": "handbags", "name": "Handbags", "image": "https://i.ebayimg.com/thumbs/images/g/riUAAOSw01dZpnCJ/s-l225.webp" },
            { "id": "jewelry", "name": "Jewelry", "image": "https://i.ebayimg.com/thumbs/images/g/DrQAAOSwDuJW0vOw/s-l225.webp" },
            { "id": "scarves", "name": "Scarves", "image": "https://i.ebayimg.com/thumbs/images/g/kpcAAOSwSMZe7xmL/s-l225.webp" },
            { "id": "hats", "name": "Hats", "image": "https://i.ebayimg.com/thumbs/images/g/17sAAOSwGJlZJXh1/s-l225.webp" },
            { "id": "sunglasses", "name": "Sunglasses", "image": "https://i.ebayimg.com/thumbs/images/g/Bf8AAOSwTi1baBMc/s-l225.webp" }
          ]
        }
      ]
    }
  ];
  
  multiSelectFilter = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
        { value: "yellow", label:"Yellow"}
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "adidas", label: "Adidas" },
        { value: "nike", label: "Nike" },
        { value: "puma", label: "Puma" },
        { value: "reebok", label: "Reebok" },
        { value: "woodland", label: "Woodland" }
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
      ],
    },
    {
      id: "price",
      name: "Price Range",
      options: [
        { value: "0-499", label: "Under ₹499" },
        { value: "500-999", label: "₹500 To ₹999" },
        { value: "1000-1999", label: "₹1000 To ₹1999" },
        { value: "2000-4999", label: "₹2000 To ₹4999" },
        { value: "5000<", label: "Over ₹5000" },
      ],
    },
    {
      id: "discount",
      name: "Discount",
      options: [
        { value: "30", label: "30% or more" },
        { value: "40", label: "40% or more" },
        { value: "50", label: "50% or more" },
        { value: "60", label: "60% or more" }
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "out_of_stock", label: "Include Out Of Stock" },  
      ],
    },
  ];
}