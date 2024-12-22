import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
          alt="Hero" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">AK ATTIRE</h1>
            <p className="text-xl md:text-2xl mb-8">Elevate Your Style</p>
            <div className="space-x-4">
              <Link 
                to="/products/male" 
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Shop Men
              </Link>
              <Link 
                to="/products/female" 
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/products/male" className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="Men's Collection" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <div className="flex items-center justify-center">
                  <span>Shop Now</span>
                  <ArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/products/female" className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03"
              alt="Women's Collection" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <div className="flex items-center justify-center">
                  <span>Shop Now</span>
                  <ArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}