import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart } from 'lucide-react';

export default function Sustainability() {
  const commitments = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Materials",
      description: "We source eco-friendly materials that minimize environmental impact."
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Zero Waste",
      description: "Our production process is designed to eliminate waste and promote recycling."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ethical Production",
      description: "We ensure fair working conditions and support local communities."
    }
  ];

  const stats = [
    { value: '85%', label: 'Sustainable Materials' },
    { value: '90%', label: 'Renewable Energy' },
    { value: '5K+', label: 'Donations' }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("/patterns/noise.png")',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-white mb-6">Our Commitment to Sustainability</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We believe in creating fashion that respects our planet and its people.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
          variants={{
            show: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1, bounce: 0.4 }}
                className="text-5xl font-bold text-gold-500 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-black mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}