import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { StoreLocation } from '../../types';

interface StoreLocationsProps {
  locations: StoreLocation[];
}

export default function StoreLocations({ locations }: StoreLocationsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition"></div>
          <div className="relative bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-gold-500/50 transition-all duration-300">
            <h3 className="text-xl font-serif text-white mb-4">{location.name}</h3>
            <div className="space-y-4 text-gray-300">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <p>{location.address}</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Phone className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <p>{location.phone}</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Clock className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <p>{location.hours}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}