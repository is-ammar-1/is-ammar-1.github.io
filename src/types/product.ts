export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ProductCategory = 'male' | 'female';
export type ProductSubcategory = 'formal' | 'casual' | 'accessories';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  subcategory: ProductSubcategory;
  description: string;
  sizes: ProductSize[];
  colors: ProductColor[];
  inStock: boolean;
}