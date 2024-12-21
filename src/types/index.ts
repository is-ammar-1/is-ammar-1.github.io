export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'men' | 'women';
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}