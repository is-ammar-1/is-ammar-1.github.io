import React from 'react';
import { motion } from 'framer-motion';
import BrandStory from '../components/about/BrandStory';
import Sustainability from '../components/about/Sustainability';
import { ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16 overflow-hidden"
    >
      <div className="relative h-[80vh] flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Multiple overlay layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90" />
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: 'url("/patterns/grain.png")',
              backgroundRepeat: 'repeat',
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A legacy of craftsmanship, innovation, and sustainable luxury fashion
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <ArrowDown className="w-6 h-6 text-gold-500" />
        </motion.div>
      </div>

      <BrandStory />
      <Sustainability />
    </motion.div>
  );
}