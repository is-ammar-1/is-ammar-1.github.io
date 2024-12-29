import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center py-6 border-b border-neutral-800">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-24 h-32 object-cover"
      />
      <div className="ml-6 flex-1">
        <div className="flex justify-between">
          <h3 className="text-white font-medium">{item.name}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-400 mt-1">Size: {item.selectedSize}</p>
        <p className="text-gray-400">Color: {item.selectedColor}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-neutral-700">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-2 text-gray-400 hover:text-white"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 text-white">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-white font-medium">
            Rs. {(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}