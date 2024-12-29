import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Updated import path
import CheckoutForm from '../components/checkout/CheckoutForm';
import { CheckoutFormData, MobilePaymentData } from '../types';

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => 
    sum + (item.product.price * item.quantity), 0
  );

  const handleCheckoutComplete = async (formData: CheckoutFormData) => {
    setIsProcessing(true);
    try {
      // Here you would typically make an API call to process the payment
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleMobilePayment = async (data: MobilePaymentData) => {
    setIsProcessing(true);
    try {
      // Handle mobile payment submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-white mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm
              onSubmit={handleCheckoutComplete}
              onMobilePaymentSubmit={handleMobilePayment}
              isProcessing={isProcessing}
            />
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-serif text-white mb-4">Order Summary</h2>
            {items.map(item => (
              <div key={`${item.product.id}-${item.size}`} className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-gray-300">
                  {item.product.name} x {item.quantity}
                </span>
                <span className="text-white">
                  Rs{(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-700">
              <div className="flex justify-between text-white font-medium">
                <span>Total</span>
                <span>Rs{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}