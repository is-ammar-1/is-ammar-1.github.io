import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.005;
      const moveY = (clientY - window.innerHeight / 2) * 0.005;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * i,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <motion.div style={{ opacity }} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          scale,
          x: mousePosition.x,
          y: mousePosition.y
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }
              }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-serif mb-6 leading-tight"
                variants={textRevealVariants}
                custom={0}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
                  Elevate
                </span>
                <span className="block">Your Style</span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-8"
                variants={textRevealVariants}
                custom={1}
              >
                Discover our curated collection of premium fashion pieces
              </motion.p>

              <motion.div
                variants={textRevealVariants}
                custom={2}
                className="flex gap-6 justify-center"
              >
                <Link 
                  to="/collections"
                  className="group relative px-8 py-4 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left" />
                  <span className="relative z-10 flex items-center text-gold-500 group-hover:text-black transition-colors duration-300">
                    Explore Collections
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        whileHover={{ scale: 1.1 }}
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </motion.div>
  );
}