import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCollections } from '../../hooks/useCollections';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import QuickViewModal from '../../components/shared/QuickViewModal';

export default function CollectionsPage() {
  const { collections, loading, error } = useCollections();
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-black via-neutral-900 to-black animate-gradient"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif mb-4 text-white">Our Collections</h1>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-8"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className={`${index % 3 === 1 ? 'lg:mt-12' : ''}`}
            >
              <Link
                to={`/collections/${collection.id}`}
                className="group h-full block relative overflow-hidden rounded-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <motion.h2 
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      className="text-3xl font-serif text-white mb-3"
                    >
                      {collection.name}
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-200 text-sm mb-4"
                    >
                      {collection.description}
                    </motion.p>
                    <motion.span 
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gold-500 flex items-center gap-2"
                    >
                      Explore Collection →
                    </motion.span>
                  </div>
                </motion.div>
                <div className="h-full w-full">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.div>
  );
}
