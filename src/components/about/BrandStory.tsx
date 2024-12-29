import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandStory() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-white mb-8">Our Heritage</h2>
            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Founded in 1970, AK Attire has been at the forefront of luxury fashion, 
                crafting timeless pieces that blend traditional craftsmanship with contemporary design.
              </motion.p>
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our commitment to excellence is reflected in every stitch, every fabric choice, 
                and every finished garment that bears our name.
              </motion.p>
            </div>
          </motion.div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ scale: imageScale }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Artisan crafting clothing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}