import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollections } from '../../hooks/useCollections';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollections() {
  const { collections, loading } = useCollections();
  const featuredCollections = collections.slice(0, 3);

  if (loading) return null;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif"
          >
            Featured Collections
          </motion.h2>
          <Link 
            to="/collections" 
            className="text-gold-500 hover:text-gold-400 transition flex items-center gap-2 group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-[400px]" // Fixed height container
            >
              <Link 
                to={`/collections/${collection.id}`}
                className="group block relative w-full h-full rounded-lg overflow-hidden"
              >
                <div className="w-full h-full">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-gold-500 transition">
                      {collection.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">
                        {collection.productCount} Products
                      </span>
                      <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
