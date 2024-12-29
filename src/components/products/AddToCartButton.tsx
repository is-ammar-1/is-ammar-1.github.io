import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';

interface AddToCartButtonProps {
  product: Product;
  onAddToCart: (quantity: number, size: string, color: string) => void;
}

export default function AddToCartButton({ product, onAddToCart }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await onAddToCart(quantity, size, color);
      // Show success notification
    } catch (error) {
      // Show error notification
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="bg-neutral-800 text-white px-3 py-2 rounded"
        >
          {product.sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="bg-neutral-800 text-white px-3 py-2 rounded"
        >
          {product.colors.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <div className="flex items-center border border-neutral-700 rounded">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="px-3 py-2 text-gray-400 hover:text-white"
          >
            -
          </button>
          <span className="px-3 text-white">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="px-3 py-2 text-gray-400 hover:text-white"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={loading || !product.inStock}
        className="w-full bg-gold-500 text-black py-3 flex items-center justify-center space-x-2 hover:bg-gold-600 transition disabled:opacity-50"
      >
        {loading ? (
          <span>Adding...</span>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </>
        )}
      </button>
    </div>
  );
}