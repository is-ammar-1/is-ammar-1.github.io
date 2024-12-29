import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      const result = await emailjs.send(
        "service_esr8ies",
        "template_e93560n",
        {
          subscriber_email: email,
          subject: "New Newsletter Subscription"
        },
        "5Qhhl84-Z_kbaAtPa"
      );

      console.log('EmailJS Response:', result);

      if (result.status === 200) {
        setStatus('success');
        setMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-neutral-800 px-4 py-3 rounded-lg pr-32 focus:ring-2 focus:ring-gold-500"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-1 bg-gold-500 text-black px-6 py-2 rounded-md hover:bg-gold-600 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Always show message container to prevent layout shift */}
      <div className={`text-sm mt-2 min-h-[20px] ${
        status === 'success' ? 'text-green-500' : 'text-red-500'
      }`}>
        {message}
      </div>
    </div>
  );
}
