import React from 'react';
import { CartItem } from '../../types';

interface OrderSummaryProps {
  items: CartItem[];
  className?: string;
}

export default function OrderSummary({ items, className = '' }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 1000; // Rs. 1000 fixed shipping
  const total = subtotal + shipping;

  return (
    <div className={`bg-neutral-900 p-6 rounded-lg ${className}`}>
      <h2 className="text-xl font-serif text-white mb-6">Order Summary</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between text-gray-300 text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="border-t border-neutral-700 my-4" />
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Shipping</span>
          <span>Rs. {shipping.toLocaleString()}</span>
        </div>
        <div className="border-t border-neutral-700 pt-4">
          <div className="flex justify-between text-white font-medium">
            <span>Total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
