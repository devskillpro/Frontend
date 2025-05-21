// helpers/data.js

export const heroData = {
  images: [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
  ],
};

// export const featuredProducts = [
//   {
//     id: 1,
//     name: "Shanaya Luxury Attar ",
//     price: 399,
//     originalPrice: 599,
//     image: "/5.jpg",
//     rating: 4.7,
//     reviews: 13518,
//     isTrending: true,
//     isNewArrival: true,
//     category: "ATTAR",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-15T10:00:00Z"
//   },
//   {
//     id: 2,
//     name: "Oud-e-Rose Premium ",
//     price: 499,
//     originalPrice: 749,
//     image: "/6.jpg",
//     rating: 4.8,
//     reviews: 9000,
//     isTrending: true,
//     isNewArrival: true,
//     category: "ATTAR",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-14T14:30:00Z"
//   },
//   {
//     id: 3,
//     name: "Shanaya Luxury  Perfume",
//     price: 399,
//     originalPrice: 599,
//     image: "/5.jpg",
//     rating: 4.7,
//     reviews: 13518,
//     isTrending: true,
//     isNewArrival: true,
//     category: "ATTAR",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-13T09:00:00Z"
//   },
//   {
//     id: 4,
//     name: "Oud-e-Rose  Attar",
//     price: 499,
//     originalPrice: 749,
//     image: "/6.jpg",
//     rating: 4.8,
//     reviews: 9000,
//     isTrending: true,
//     isNewArrival: true,
//     category: "COMBO OFFERS",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-12T16:45:00Z"
//   },
//   {
//     id: 5,
//     name: "Shanaya  Attar Perfume",
//     price: 399,
//     originalPrice: 599,
//     image: "/5.jpg",
//     rating: 4.7,
//     reviews: 13518,
//     isTrending: true,
//     isNewArrival: false,
//     category: "ATTAR",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-05T11:20:00Z"
//   },
//   {
//     id: 6,
//     name: "Oud-e- Premium Attar",
//     price: 499,
//     originalPrice: 749,
//     image: "/6.jpg",
//     rating: 4.8,
//     reviews: 9000,
//     isTrending: true,
//     isNewArrival: false,
//     category: "PERFUME SPRAY",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-01T08:10:00Z"
//   },
//     {
//     id: 7,
//     name: "Oud-e- Premiu Attar",
//     price: 499,
//     originalPrice: 749,
//     image: "/6.jpg",
//     rating: 4.8,
//     reviews: 9000,
//     isTrending: true,
//     isNewArrival: false,
//     category: "PERFUME SPRAY",
//     description: 'A soothing floral attar with the elegant aroma of fresh roses.',
//     dateAdded: "2025-05-01T08:10:00Z"
//   },
//   // more...
// ];



export const featuredProducts = [
  {
    id: 1,
    name: "Shanaya Luxury Attar",
    images: ["/5.jpg", "/6.jpg"],
    variants: [
      { id: "1-30", label: "30ml", price: 399, originalPrice: 599, stock: 10 },
      { id: "1-50", label: "50ml", price: 599, originalPrice: 899, stock: 7 },
      { id: "1-100", label: "100ml", price: 999, originalPrice: 1399, stock: 3 },
    ],
    rating: 4.7,
    reviews: 13518,
    isTrending: true,
    isNewArrival: true,
    category: "ATTAR",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Oud-e-Rose Premium",
    images: ["/6.jpg", "/5.jpg"],
    variants: [
      { id: "2-30", label: "30ml", price: 499, originalPrice: 749, stock: 8 },
      { id: "2-50", label: "50ml", price: 749, originalPrice: 1049, stock: 2 },
    ],
    rating: 4.8,
    reviews: 9000,
    isTrending: true,
    isNewArrival: true,
    category: "ATTAR",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-14T14:30:00Z"
  },
  {
    id: 3,
    name: "Shanaya Luxury Perfume",
    images: ["/5.jpg","/6.jpg"],
    variants: [
      { id: "3-50", label: "50ml", price: 399, originalPrice: 599, stock: 0 },
      { id: "3-100", label: "100ml", price: 699, originalPrice: 999, stock: 0 }, 
    ],
    rating: 4.7,
    reviews: 13518,
    isTrending: true,
    isNewArrival: true,
    category: "ATTAR",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-13T09:00:00Z"
  },
  {
    id: 4,
    name: "Oud-e-Rose Attar",
    images: ["/6.jpg"],
    variants: [
      { id: "4-30", label: "30ml", price: 499, originalPrice: 749, stock: 6 },
    ],
    rating: 4.8,
    reviews: 9000,
    isTrending: true,
    isNewArrival: true,
    category: "COMBO OFFERS",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-12T16:45:00Z"
  },
  {
    id: 5,
    name: "Shanaya Attar Perfume",
    images: ["/5.jpg"],
    variants: [
      { id: "5-50", label: "50ml", price: 399, originalPrice: 599, stock: 9 },
    ],
    rating: 4.7,
    reviews: 13518,
    isTrending: true,
    isNewArrival: false,
    category: "ATTAR",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-05T11:20:00Z"
  },
  {
    id: 6,
    name: "Oud-e- Premium Attar",
    images: ["/6.jpg"],
    variants: [
      { id: "6-100", label: "100ml", price: 499, originalPrice: 749, stock: 4 },
    ],
    rating: 4.8,
    reviews: 9000,
    isTrending: true,
    isNewArrival: false,
    category: "PERFUME SPRAY",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-01T08:10:00Z"
  },
  {
    id: 7,
    name: "Oud-e- Premiu Attar",
    images: ["/6.jpg"],
    variants: [
      { id: "7-100", label: "100ml", price: 499, originalPrice: 749, stock: 7 },
    ],
    rating: 4.8,
    reviews: 9000,
    isTrending: true,
    isNewArrival: false,
    category: "PERFUME SPRAY",
    description: 'A soothing floral attar with the elegant aroma of fresh roses.',
    dateAdded: "2025-05-01T08:10:00Z"
  },
  // more...
];
