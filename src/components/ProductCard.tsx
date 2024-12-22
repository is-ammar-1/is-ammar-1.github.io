import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden group">
          <motion.img 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <p className="text-gray-400 mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-white text-lg">${product.price.toFixed(2)}</span>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-gray-600"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}