import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">AK ATTIRE</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/products/male" className="hover:text-gray-300 px-3 py-2">Men</Link>
              <Link to="/products/female" className="hover:text-gray-300 px-3 py-2">Women</Link>
              <Link to="/about" className="hover:text-gray-300 px-3 py-2">About</Link>
              <Link to="/contact" className="hover:text-gray-300 px-3 py-2">Contact</Link>
              <Link to="/cart" className="hover:text-gray-300 px-3 py-2">
                <ShoppingCart className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-gray-300 px-3 py-2">Home</Link>
            <Link to="/products/male" className="block hover:text-gray-300 px-3 py-2">Men</Link>
            <Link to="/products/female" className="block hover:text-gray-300 px-3 py-2">Women</Link>
            <Link to="/about" className="block hover:text-gray-300 px-3 py-2">About</Link>
            <Link to="/contact" className="block hover:text-gray-300 px-3 py-2">Contact</Link>
            <Link to="/cart" className="block hover:text-gray-300 px-3 py-2">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
}