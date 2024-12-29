import React from 'react';
import { motion } from 'framer-motion';

export default function AboutBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grain.png')] opacity-10" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        </div>
      </div>
      <div className="absolute inset-0">
        <div 
          className="h-full w-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)'
          }}
        />
      </div>
    </>
  );
}
