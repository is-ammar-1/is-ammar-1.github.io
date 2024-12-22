import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    category: 'male',
    subcategory: 'formal',
    description: 'Essential black t-shirt made from premium cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#000000' }],
    inStock: true
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9',
    category: 'male',
    subcategory: 'formal',
    description: 'Timeless denim jacket with a modern fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Blue', hex: '#0000FF' }],
    inStock: true
  },
  {
    id: '3',
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    category: 'female',
    subcategory: 'formal',
    description: 'Flowy summer dress perfect for any occasion.',
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Red', hex: '#FF0000' }],
    inStock: true
  },
  {
    id: '4',
    name: 'Elegant Blouse',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    category: 'female',
    subcategory: 'formal',
    description: 'Sophisticated blouse for a professional look.',
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    inStock: true
  }
];