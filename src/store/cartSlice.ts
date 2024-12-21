import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductSize, ProductColor } from '../types/product';

interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: ProductSize;
  selectedColor: ProductColor;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => 
          item.product.id === action.payload.product.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor.name === action.payload.selectedColor.name
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        item => 
          !(item.product.id === action.payload.product.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor.name === action.payload.selectedColor.name)
      );
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ item: CartItem; quantity: number }>) => {
      const existingItem = state.items.find(
        item => 
          item.product.id === action.payload.item.product.id &&
          item.selectedSize === action.payload.item.selectedSize &&
          item.selectedColor.name === action.payload.item.selectedColor.name
      );
      
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;