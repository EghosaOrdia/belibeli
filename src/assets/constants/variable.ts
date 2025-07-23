import { images } from "./media";

// Categories for the home page
export const categories = [
  {
    id: 0,
    text: "T-Shirt",
    image: images.blackshirt,
    alt: "folded black shirt with transparent background",
  },
  {
    id: 1,
    text: "Jacket",
    image: images.jacket,
    alt: "black sleeved hoodie with transparent background",
  },
  {
    id: 2,
    text: "Shirt",
    image: images.whiteshirt,
    alt: "folded white shirt with transparent background",
  },
  {
    id: 3,
    text: "Jeans",
    image: images.jeans,
    alt: "black ripped jeans for men",
  },
  {
    id: 4,
    text: "Bag",
    image: images.handbag,
    alt: "black louis vuitton hand bag",
  },
  {
    id: 5,
    text: "Shoes",
    image: images.heels,
    alt: "pair of black high top high heels",
  },
  { id: 6, text: "Watches", image: images.watch, alt: "black watch" },
  {
    id: 7,
    text: "Cap",
    image: images.cap,
    alt: "black tommy hillfigher cap",
  },
];

export const flashSaleListings = [
  {
    id: 0,
    listing_title: "EliteShield Performance Men's Jackets",
    price: "255.00",
    image: images.jacket_2,
    left: 9,
    total: 10,
  },
  {
    id: 1,
    listing_title: "Gentlemen Summer Gray Hat - Premium Blend",
    price: "99.00",
    image: images.hat,
    left: 1,
    total: 12,
  },
  {
    id: 2,
    listing_title: "OptiZooom Camera Shoulder Bag",
    price: "250.00",
    image: images.bag,
    left: 10,
    total: 10,
  },
  {
    id: 3,
    listing_title: "Cloudy Chic - Grey Peep Toe Heeled Sandals",
    price: "270.00",
    image: images.heels_2,
    left: 8,
    total: 10,
  },
  {
    id: 4,
    listing_title: "Urban Style - Black Ripped Jeans",
    price: "200.00",
    image: images.jeans,
    left: 7,
    total: 10,
  },
];

export const bestStores = [
  {
    id: 0,
    name: "Nike Sales Mall",
    tagline: "Just do it bro!",
    images: [
      { id: 0, src: images.handbag, alt: "black handbag", price: 650.0 },
      { id: 1, src: images.heels_2, alt: "gray heels for women", price: 270.0 },
      {
        id: 2,
        src: images.hat,
        alt: "gray hat with black stripe for men",
        price: 99.0,
      },
    ],
  },
  {
    id: 1,
    name: "Barudak Disaster Mall",
    tagline: "Unleash your fashion",
    images: [
      {
        id: 0,
        src: images.coat,
        alt: "long gray unisex trench coat",
        price: 324.0,
      },
      {
        id: 1,
        src: images.leather_shoes,
        alt: "black polished eligant dress shoes for men",
        price: 199.0,
      },
      {
        id: 2,
        src: images.hat,
        alt: "gray hat with black stripe for men",
        price: 120.0,
      },
    ],
  },
  {
    id: 2,
    name: "Galaxy Galleria Mall",
    tagline: "Be Extraordinary",
    images: [
      {
        id: 0,
        src: images.flannel_shirts,
        alt: "black, blue and gray striped flannel shirts",
        price: 179.0,
      },
      {
        id: 1,
        src: images.leather_shoes,
        alt: "black polished eligant dress shoes for men",
        price: 199.0,
      },
      {
        id: 2,
        src: images.ripped_jeans,
        alt: "black ripped jeans for women",
        price: 253.0,
      },
    ],
  },
  {
    id: 3,
    name: "Aurora Well Mall",
    tagline: "Chick, Bold, Confident",
    images: [
      { id: 0, src: images.bag, alt: "black camera bags", price: 250.0 },
      {
        id: 1,
        src: images.white_shorts,
        alt: "white jean shorts for men",
        price: 162.0,
      },
      {
        id: 2,
        src: images.jacket_2,
        alt: "black jacket for men",
        price: 255.0,
      },
    ],
  },
];
