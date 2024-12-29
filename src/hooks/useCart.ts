import { useState, useEffect } from 'react';
import { CartItem } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems(current => {
      const existingItem = current.find(i => 
        i.id === item.id && 
        i.selectedSize === item.selectedSize && 
        i.selectedColor === item.selectedColor
      );

      if (existingItem) {
        return current.map(i => 
          i === existingItem 
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...current, item];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(current =>
      current.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems(current => current.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    total,
  };
}