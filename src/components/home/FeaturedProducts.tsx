import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuickViewModal from '../shared/QuickViewModal';
import { Product } from '../../types/Product';

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Wool Peacoat",
    price: 15999,
    description: "Timeless double-breasted peacoat crafted from premium wool blend. Features notched lapels and side pockets.",
    image: "https://image1.superdry.com/static/images/optimised/zoom/upload3619524498856175479.jpg?auto=format&fit=crop&q=80",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Leather Biker Jacket",
    price: 24999,
    description: "Genuine leather motorcycle jacket with asymmetrical zip closure and quilted shoulders.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 189,
    description: "Luxuriously soft cashmere sweater in a relaxed fit. Perfect for layering.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    name: "Tailored Blazer",
    price: 259,
    description: "Sophisticated single-breasted blazer with subtle check pattern. Made from Italian wool.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Silk Evening Dress",
    price: 449,
    description: "Elegant floor-length silk dress with draped detail and side slit.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 6,
    name: "Merino Turtleneck",
    price: 149,
    description: "Fine-knit merino wool turtleneck in a slim fit. Naturally temperature regulating.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Structured Trench Coat",
    price: 289,
    description: "Water-resistant cotton gabardine trench coat with classic double-breasted closure.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Pleated Maxi Skirt",
    price: 179,
    description: "Flowing pleated maxi skirt in lightweight fabric with metallic finish.",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 9,
    name: "Linen Suit Pants",
    price: 159,
    description: "Tailored linen blend trousers with pressed creases and side pockets.",
    image: "https://i.etsystatic.com/17282601/r/il/065181/3183769321/il_1588xN.3183769321_jddo.jpg?auto=format&fit=crop&q=80",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Velvet Dinner Jacket",
    price: 329,
    description: "Luxurious velvet dinner jacket with satin peak lapels. Perfect for formal occasions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    sizes: ["S", "M", "L", "XL"]
  }
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section className="pb-24 pt-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"  // Changed from mb-16 to mb-12
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Featured Products
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
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
                  onClick={() => setSelectedProduct(product)}
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
    </section>
  );
}