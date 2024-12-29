import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setMessage('');

    const templateParams = {
      to_name: 'Admin',
      from_name: email,
      message: `New newsletter subscription request from: ${email}`,
    };

    try {
      // Debug logs
      console.log('Starting email submission...');
      console.log('Environment variables:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      console.log('Template params:', templateParams);

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);
      
      setStatus('success');
      setMessage('Thanks for subscribing! You will receive updates soon.');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-neutral-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gold-500 text-black px-6 py-2 rounded-lg hover:bg-gold-600 transition disabled:opacity-50"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {(status !== 'idle' || message) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-sm ${
              status === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message || (status === 'loading' ? 'Subscribing...' : '')}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
