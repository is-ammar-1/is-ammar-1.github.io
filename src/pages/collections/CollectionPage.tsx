import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCollections } from '../../hooks/useCollections';
import CollectionProducts from '../../components/collections/CollectionProducts';
import CollectionSort from '../../components/collections/CollectionSort';
import { Loader2 as Loader } from 'lucide-react';
import CollectionFilters from '../../components/collections/CollectionFilters';
import QuickViewModal from '../../components/shared/QuickViewModal';
import { Product } from '../../types/Product';
import { motion, useScroll, useTransform } from 'framer-motion';

type FilterKey = 'category' | 'season' | 'theme';

const filterOptions = {
  categories: [
    { label: 'Jackets', value: 'jackets' },
    { label: 'Suits', value: 'suits' },
    { label: 'Accessories', value: 'accessories' }
  ],
  seasons: [
    { label: 'Winter', value: 'winter' },
    { label: 'Spring', value: 'spring' },
    { label: 'Summer', value: 'summer' },
    { label: 'Fall', value: 'fall' },
    { label: 'All Seasons', value: 'all' }
  ],
  themes: [
    { label: 'Casual', value: 'casual' },
    { label: 'Formal', value: 'formal' },
    { label: 'Sport', value: 'sport' }
  ]
};

export default function CollectionPage() {
  const { id } = useParams();
  const { collections, loading, error, setFilters } = useCollections();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<FilterKey, string>>({
    category: '',
    season: '',
    theme: ''
  });
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Add effect to update filters in useCollections hook
  useEffect(() => {
    setFilters(activeFilters);
  }, [activeFilters, setFilters]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader className="h-8 w-8 text-gold-500 animate-spin" />
        </div>
      </div>
    );
  }

  if (error) return <div className="min-h-screen pt-20 px-4 text-red-500">{error}</div>;

  const collection = collections.find(c => c.id === id);
  if (!collection) return <div className="min-h-screen pt-20 px-4">Collection not found</div>;

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleFilterChange = (key: FilterKey, value: string) => {
    const newFilters = { ...activeFilters };
    if (newFilters[key] === value) {
      // If same value is selected, clear it
      newFilters[key] = '';
    } else {
      newFilters[key] = value;
    }
    setActiveFilters(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      category: '',
      season: '',
      theme: ''
    };
    setActiveFilters(clearedFilters);
    setFilters(clearedFilters);
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          style={{ y: headerY }}
          className="absolute inset-0"
        >
          <img
            src={collection.heroImage || collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: headerOpacity }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-serif mb-6"
            >
              {collection.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200"
            >
              {collection.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <motion.div 
          className="bg-black/80 backdrop-blur-sm rounded-xl p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5))' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              className="lg:col-span-1 sticky top-8"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <CollectionFilters
                categories={filterOptions.categories}
                seasons={filterOptions.seasons}
                themes={filterOptions.themes}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                activeFilters={activeFilters}
              />
            </motion.div>
            
            <div className="lg:col-span-3">
              <div className="mb-6">
                <CollectionSort
                  value="newest"
                  onChange={(value) => console.log('Sort:', value)}
                />
              </div>
              <CollectionProducts
                collectionId={id || ''}
                onQuickView={handleQuickView}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
        />
      )}
    </div>
  );
}
