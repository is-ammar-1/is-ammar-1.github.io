import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen pt-24 px-4 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-bounce-slow mb-8">
          <CheckCircle className="h-24 w-24 mx-auto text-gold-500" />
        </div>
        
        <h1 className="text-4xl font-serif mb-4 animate-fade-in text-white">
          Thank you for your order!
        </h1>
        
        <p className="text-gray-400 mb-8 animate-fade-in-delay">
          We're processing your order and will send you a confirmation email shortly.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-lg animate-slide-up">
          <p className="text-sm text-gray-400">
            Redirecting you to the home page in 5 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
