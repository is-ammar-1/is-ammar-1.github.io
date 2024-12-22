import React from 'react';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  return (
    <div className="bg-black min-h-screen text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Example cart item */}
              <div className="bg-gray-900 p-6 rounded-lg flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"
                  alt="Product" 
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Classic Black Tee</h3>
                  <p className="text-gray-400">Size: M</p>
                  <div className="mt-2 flex items-center gap-4">
                    <select className="bg-gray-800 rounded px-2 py-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <button className="text-red-500 hover:text-red-400">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="text-xl font-semibold">$29.99</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total</span>
                    <span>$34.99</span>
                  </div>
                </div>
                <button className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition-colors mt-6">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}