import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/products/ProductGrid';
import QuickViewModal from '../components/shared/QuickViewModal';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

export default function CollectionPage() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Our Collection
          </h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            {error}
          </div>
        ) : (
          <ProductGrid 
            products={products} 
            onQuickView={(product) => setSelectedProduct(product)}
          />
        )}
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
