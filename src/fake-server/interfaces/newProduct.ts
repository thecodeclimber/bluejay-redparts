export interface IProduct {
  name: string;
  slug: string;
  sku: string;
  Type: string;
  images: string[];
  rating: number;
  reviews: number;
  compareAtPrice: number;
  availability: string;
  compatibility: number[];
  attributes: {
    Color: string;
  };
  Category: string;
  Description: string;
  Diameter: string;
  Length: string;
  Head_type: string;
  Drive: string;
  Grade: string;
  Material: string;
  Finish: string;
  Qty_per_Box: string;
  List_price: string;
  Net_per_box: string;
}
