import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export function ProductCard(product: Product) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { dispatch } = useCart();

  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-1 text-sm rounded ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, size: selectedSize } })}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}