import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishListed, setIsWishListed] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (product.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (product.images?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="relative bg-neutral-900 max-w-4xl w-full rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md
                hover:bg-black/70 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative aspect-square">
                <motion.img
                  key={currentImageIndex}
                  src={product.images?.[currentImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image Navigation */}
                {(product.images?.length || 0) > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                        bg-black/50 backdrop-blur-md hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                        bg-black/50 backdrop-blur-md hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Product Details */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h2 
                      className="text-2xl font-serif text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {product.name}
                    </motion.h2>
                    <motion.p 
                      className="text-gold-500 text-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Rs. {product.price.toLocaleString()}
                    </motion.p>
                  </div>
                  <motion.button
                    onClick={() => setIsWishListed(!isWishListed)}
                    className={`p-2 rounded-full ${
                      isWishListed ? 'bg-gold-500 text-black' : 'bg-neutral-800'
                    } transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="h-5 w-5" fill={isWishListed ? "currentColor" : "none"} />
                  </motion.button>
                </div>

                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.description}
                </motion.p>

                {/* Size Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-400 mb-2">Size</label>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-full border ${
                          selectedSize === size
                            ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                            : 'border-neutral-700 hover:border-gold-500/50'
                        } transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Color Selection if available */}
                {product.colors && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-400 mb-2">Color</label>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color
                              ? 'border-gold-500'
                              : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Add to Cart Button */}
                <motion.button
                  onClick={handleAddToCart}
                  className="w-full bg-gold-500 text-black py-4 rounded-full
                    hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
