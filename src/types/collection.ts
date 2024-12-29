import { Product } from './Product';

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  category: string;
  season: string;
  theme: string;
  createdAt: string;
  products: Product[];
}
