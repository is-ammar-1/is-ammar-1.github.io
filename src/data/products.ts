import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    category: 'male',
    description: 'Essential black t-shirt made from premium cotton.'
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9',
    category: 'male',
    description: 'Timeless denim jacket with a modern fit.'
  },
  {
    id: '3',
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    category: 'female',
    description: 'Flowy summer dress perfect for any occasion.'
  },
  {
    id: '4',
    name: 'Elegant Blouse',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    category: 'female',
    description: 'Sophisticated blouse for a professional look.'
  }
];