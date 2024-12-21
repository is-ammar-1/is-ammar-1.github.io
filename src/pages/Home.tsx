import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2070"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Elevate Your Style</h1>
            <p className="text-xl mb-8">Discover our latest collection of premium clothing</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/products" className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=987"
              alt="Men's Collection"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Men's Collection</h3>
            </div>
          </Link>
          <Link to="/products" className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=987"
              alt="Women's Collection"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Women's Collection</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}