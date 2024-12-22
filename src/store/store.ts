import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export type ProductCategory = 'Electronics' | 'Clothing' | 'Home' | 'Beauty' | 'Sports';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category: ProductCategory;
  subcategory: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;