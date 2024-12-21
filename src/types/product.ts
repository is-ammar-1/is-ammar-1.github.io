export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'male' | 'female';
  description: string;
}