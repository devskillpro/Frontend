// types/Review.ts
export type Review = {
  name: string;
  date: string;
  rating: number;
  comment: string;
  images?: string[]; // Array of image URLs (base64 or uploaded URLs)
};
