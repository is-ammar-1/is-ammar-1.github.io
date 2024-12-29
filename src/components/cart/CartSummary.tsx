import React from 'react';
import { CartItem } from '../../types';

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-neutral-900 p-6 rounded-lg">
      <h2 className="text-xl font-serif text-white mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>Rs{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Shipping</span>
          <span>Rs{shipping.toFixed(2)}</span>
        </div>
        <div className="border-t border-neutral-700 pt-4">
          <div className="flex justify-between text-white font-medium">
            <span>Total</span>
            <span>Rs{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-gold-500 text-black py-3 mt-6 hover:bg-gold-600 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}