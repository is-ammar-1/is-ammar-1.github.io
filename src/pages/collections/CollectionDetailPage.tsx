import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import ProductGrid from '../../components/products/ProductGrid';
import QuickViewModal from '../../components/shared/QuickViewModal';
import { useCollectionProducts } from '../../hooks/useCollectionProducts';
import { Product } from '../../types';

export default function CollectionDetailPage() {
  const { collectionId } = useParams();
  const { products, loading, error } = useCollectionProducts(collectionId || '');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader className="h-8 w-8 text-gold-500 animate-spin" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="text-red-500 text-center py-8">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {products[0]?.collection?.name || 'Collection'}
          </h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </motion.div>

        <ProductGrid 
          products={products} 
          onQuickView={(product) => setSelectedProduct(product)}
        />

        {selectedProduct && (
          <QuickViewModal
            product={selectedProduct}
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}
