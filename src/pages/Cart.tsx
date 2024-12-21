import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

export function Cart() {
  const { state, dispatch } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  <p className="text-sm font-medium">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                      })}
                      className="p-1"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 }
                      })}
                      className="p-1"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  className="p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-black text-white py-2 px-4 rounded-md mt-6 hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}