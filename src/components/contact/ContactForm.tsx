import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitSuccess && (
        <div className="bg-green-900/50 text-green-300 p-4 rounded-lg mb-6">
          Thank you for your message. We'll get back to you soon!
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-white"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          type="email"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-white"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          Subject
        </label>
        <input
          {...register('subject', { required: 'Subject is required' })}
          type="text"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-white"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={4}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-white"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-500 text-black py-3 rounded-lg font-medium hover:bg-gold-600 transition disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}