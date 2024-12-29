import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export default function ProductGrid({ products, onQuickView }: ProductGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={() => onQuickView(product)}
          onAddToCart={() => {/* Implement add to cart handler */}}
        />
      ))}
    </motion.div>
  );
}