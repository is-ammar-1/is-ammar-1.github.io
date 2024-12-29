import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedCollections from '../components/collections/FeaturedCollections';
import FeaturedProducts from '../components/home/FeaturedProducts';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
    </motion.div>
  );
}
