import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickView?: () => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.button
          onClick={onQuickView}
          className="absolute left-0 right-0 bottom-8 mx-auto w-max
            bg-gold-500 text-black px-6 py-2 rounded-full
            opacity-0 group-hover:opacity-100 transition-all duration-300
            hover:bg-gold-400"
          whileHover={{ scale: 1.05 }}
        >
          Quick View
        </motion.button>
      </div>
      
      <div className="space-y-2 text-center">
        <h3 className="text-white font-medium group-hover:text-gold-500 transition">
          {product.name}
        </h3>
        <p className="text-gray-400">Rs. {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}