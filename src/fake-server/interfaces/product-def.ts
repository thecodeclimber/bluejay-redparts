export interface IProductAttributesDef {
  [slug: string]: string | string[] | [true, string, ...string[]];
}

export interface IProductDef {
  name: string;
  slug: string;
  sku: string;
  Type: string;
  description: string;
  images: string[];
  categories?: string[];
  rating: number;
  reviews: number;
  Diameter: string;
  Length: string;
  Head_type: string;
  Drive: string;
  Grade: string;
  Material: string;
  compareAtPrice: number;
  Finish: string;
  Qty_per_Box: string;
  list_price: number;
  Net_per_box: string;
  availability: string;
  attributes?: IProductAttributesDef;
  compatibility?: 'all' | 'unknown' | number[];
}
