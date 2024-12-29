import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (items.length === 0) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [items.length, navigate]);

  const subtotal = items.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  );
  const shipping = 10; // Fixed shipping cost
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto py-16 text-center">
          <h2 className="text-3xl font-serif mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <p className="text-gray-400 mb-4">Redirecting to home page in 5 seconds...</p>
          <Link to="/collections" className="inline-block bg-gold-500 text-black px-8 py-3 hover:bg-gold-600 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-6 border-b border-neutral-800 py-6">
                <div className="w-24 h-32">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-400 mt-1">Size: {item.size}</p>
                  <p className="text-gray-400 mt-1">Quantity: {item.quantity}</p>
                  <p className="text-gold-500 mt-2">Rs{item.product.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-neutral-900 p-6 h-fit">
            <h3 className="text-xl font-serif mb-4">Order Summary</h3>
            
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Rs. {shipping.toLocaleString()}</span>
              </div>
              <div className="border-t border-neutral-800 pt-3 mt-3">
                <div className="flex justify-between text-white font-medium">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-gold-500 text-black py-3 mt-6 hover:bg-gold-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}