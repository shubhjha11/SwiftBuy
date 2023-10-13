import { Injectable } from "@angular/core";
import { Product } from "src/package/modules/shared/model/product.model";

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

  categoriesList = [
    {
      id: 'men',
      name: 'Men',
      subcategories: [
        {
          id: 'clothing',
          name: 'Clothing',
          image1: "https://m.media-amazon.com/images/G/31/img21/MA2023/june/WRS/ethinc/halo/New_Season._CB587544226_.png",
          image: "https://m.media-amazon.com/images/G/31/img21/MA2023/june/WRS/ethinc/halo/New_Season._CB587544226_.png",
          subcategories: [
            { id: 'shirts', name: 'Shirts' },
            { id: 'jeans', name: 'Jeans' },
            { id: 'jackets', name: 'Jackets' },
            { id: 'trousers', name: 'Trousers' },
            { id: 'suits', name: 'Suits' },
          ],
        },
        {
          id: 'shoes',
          name: 'Shoes',
          image1: "https://m.media-amazon.com/images/G/31/img21/shoes/2023/2.0/Women/Halo/Mens._CB578759497_.png",
          image: "https://m.media-amazon.com/images/G/31/img21/shoes/2023/2.0/Women/Halo/Mens._CB578759497_.png",
          subcategories: [
            { id: 'casual', name: 'Casual' },
            { id: 'formal', name: 'Formal' },
            { id: 'sneakers', name: 'Sneakers' },
            { id: 'boots', name: 'Boots' },
            { id: 'loafers', name: 'Loafers' },
            { id : 'sports', name: 'Sports'}
          ],
        },
        {
          id: 'watches',
          name: 'Watches',
          image1: "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Men._SS400_QL85_.jpg",
          image: "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Men._SS400_QL85_.jpg",
          subcategories: [
            { id: 'analog', name: 'Analog' },
            { id: 'digital', name: 'Digital' },
            { id: 'chronograph', name: 'Chronograph' },
            { id: 'luxury', name: 'Luxury' },
            { id: 'sports', name: 'Sports' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          image1: "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Men._SS400_QL85_.jpg",
          image: "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/sunglasses_unselected._SS300_QL85_FMpng_.png",
          subcategories: [
            { id: 'belts', name: 'Belts' },
            { id: 'ties', name: 'Ties' },
            { id: 'wallets', name: 'Wallets' },
            { id: 'hats', name: 'Hats' },
            { id: 'sunglasses', name: 'Sunglasses' },
          ],
        },
      ],
    },
    {
      id: 'women',
      name: 'Women',
      subcategories: [
        {
          id: 'clothing',
          name: 'Clothing',
          image1: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/Topwear-Store/SBC/updated/tops._SS680_QL85_.jpg",
          image: "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Women__unselected._SS300_QL85_FMpng_.png",
          subcategories: [
            { id: 'dresses', name: 'Dresses' },
            { id: 'tops', name: 'Tops' },
            { id: 'skirts', name: 'Skirts' },
            { id: 'blouses', name: 'Blouses' },
            { id: 'jumpsuits', name: 'Jumpsuits' },
          ],
        },
        {
          id: 'footwear',
          name: 'Footwear',
          image1: "https://m.media-amazon.com/images/G/31/img21/shoes/2023/2.0/Women/Halo/Women._CB578759497_.png",
          image: "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Footwear_unselected._SS300_QL85_FMpng_.png",
          subcategories: [
            { id: 'heels', name: 'Heels' },
            { id: 'flats', name: 'Flats' },
            { id: 'boots', name: 'Boots' },
            { id: 'sandals', name: 'Sandals' },
            { id: 'sneakers', name: 'Sneakers' },
          ],
        },
        {
          id: 'watches',
          name: 'Watches',
          image1: "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Women._SS400_QL85_.jpg",
          image: "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Watches_unselected._SS300_QL85_FMpng_.png",
          subcategories: [
            { id: 'designer', name: 'Designer' },
            { id: 'fashion', name: 'Fashion' },
            { id: 'smartwatches', name: 'Smartwatches' },
            { id: 'luxury', name: 'Luxury' },
            { id: 'fitness', name: 'Fitness' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          image1: "https://m.media-amazon.com/images/G/31/img21/Watches2023/July/Lux_store/Halos/Final/DOTD_Women._SS400_QL85_.jpg",
          image: "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/HALOS/Jewellery_unselected._SS300_QL85_FMpng_.png",
          subcategories: [
            { id: 'handbags', name: 'Handbags' },
            { id: 'jewelry', name: 'Jewelry' },
            { id: 'scarves', name: 'Scarves' },
            { id: 'hats', name: 'Hats' },
            { id: 'sunglasses', name: 'Sunglasses' },
          ],
        },
      ],
    },
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