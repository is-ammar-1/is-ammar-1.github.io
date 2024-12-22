import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: contact@akattire.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Fashion Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AK Attire. All rights reserved.
            </div>
            <div className="flex gap-4">
              <img src="/payment/visa.svg" alt="Visa" className="h-8" />
              <img src="/payment/mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="/payment/amex.svg" alt="American Express" className="h-8" />
              <img src="/payment/paypal.svg" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}