import React from 'react';
import { Menu, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { state } = useCart();
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-xl font-bold mr-8">AK ATTIRE</Link>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/products" className="text-sm font-medium hover:text-gray-600">Products</Link>
              <Link to="/about" className="text-sm font-medium hover:text-gray-600">About</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-gray-600">Contact</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-md">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 rounded-md relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}