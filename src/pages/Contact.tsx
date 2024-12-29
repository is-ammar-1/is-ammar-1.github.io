import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import StoreLocations from '../components/contact/StoreLocations';
import FAQ from '../components/contact/FAQ';
import SocialLinks from '../components/contact/SocialLinks';
import { StoreLocation } from '../types';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const storeLocations: StoreLocation[] = [
  {
    id: '1',
    name: 'AK Attire Islamabad',
    address: 'F-7 Markaz, Jinnah Super Market',
    coordinates: { lat: 33.7294, lng: 73.0931 },
    hours: 'Mon-Sat: 11am-10pm, Sun: 2pm-10pm',
    phone: '+92 (51) 2655789'
  },
  {
    id: '2',
    name: 'AK Attire Rawalpindi',
    address: 'Saddar, Bank Road, Rawalpindi',
    coordinates: { lat: 33.6007, lng: 73.0679 },
    hours: 'Mon-Sat: 11am-10pm, Sun: 2pm-10pm',
    phone: '+92 (51) 5550123'
  },
  {
    id: '3',
    name: 'AK Attire Lahore',
    address: 'M.M. Alam Road, Gulberg III, Lahore',
    coordinates: { lat: 31.5204, lng: 74.3587 },
    hours: 'Mon-Sat: 11am-10pm, Sun: 2pm-10pm',
    phone: '+92 (42) 35789012'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-amber-300 rounded-lg blur opacity-25"></div>
            <div className="relative bg-neutral-900 p-8 rounded-lg border border-neutral-800">
              <h1 className="text-4xl font-serif text-white mb-4">Contact Us</h1>
              <p className="text-gray-300 mb-8">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24">
              <h2 className="text-2xl font-serif text-white mb-6">Customer Service</h2>
              <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg border border-neutral-800 shadow-xl">
                <p className="text-gray-300 mb-4">
                  Our customer service team is available:
                  <br />
                  Monday-Friday: 9am-6pm EST
                  <br />
                  Saturday: 10am-4pm EST
                </p>
                <p className="text-gray-300">
                  Email: support@akattire.com
                  <br />
                  Phone: +1 (800) 555-0123
                </p>
              </div>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif text-white mb-8">Visit Our Stores</h2>
          <StoreLocations locations={storeLocations} />
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-white mb-8">Frequently Asked Questions</h2>
          <FAQ />
        </motion.section>
      </div>
    </div>
  );
}